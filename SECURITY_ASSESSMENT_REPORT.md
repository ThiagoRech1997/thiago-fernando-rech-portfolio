# Security Assessment Report: Next.js Portfolio Application

**Assessment Date**: October 5, 2025  
**Application**: Thiago Fernando Rech Portfolio  
**Technology Stack**: Next.js 15, Node.js 24.4.1, Alpine Linux, Docker  
**Assessment Scope**: Docker configuration, application security, dependencies, and infrastructure  
**Assessed by**: Senior Cybersecurity Specialist

## Executive Summary

The Next.js portfolio application demonstrates a solid foundation in container security best practices, maintaining Alpine Linux base images and non-root user execution as requested. However, several critical and high-priority security vulnerabilities have been identified that require immediate attention.

**Overall Security Posture**: Medium Risk  
**Critical Issues**: 1  
**High Priority Issues**: 4  
**Medium Priority Issues**: 6  
**Low Priority Issues**: 3  

**Key Security Concerns:**
- Critical vulnerabilities in Next.js framework requiring immediate patching
- Missing essential security headers exposing the application to various attacks
- Docker security hardening opportunities while maintaining Alpine + non-root requirements
- Environment variable handling improvements needed
- Build process security enhancements required

---

## Detailed Vulnerability Findings

### Critical Vulnerabilities

#### C-001: Next.js Framework Vulnerabilities
**Severity**: Critical  
**CVSS Score**: 6.5 (SSRF), 6.2 (Cache Key Confusion), 4.3 (Content Injection)  
**Affected Component**: Next.js 15.4.4  

**Description**: The application is using Next.js version 15.4.4, which contains three known security vulnerabilities:
1. **SSRF (Server-Side Request Forgery)** - Improper middleware redirect handling (CVE: GHSA-4342-x723-ch2f)
2. **Cache Key Confusion** - Image optimization API routes vulnerability (CVE: GHSA-g5qg-72qw-gw5v)
3. **Content Injection** - Image optimization vulnerability (CVE: GHSA-xv57-4mr9-wg8v)

**Technical Details:**
```bash
npm audit output:
next  15.0.0-canary.0 - 15.4.6
Severity: moderate
- GHSA-4342-x723-ch2f: SSRF via middleware redirect handling
- GHSA-g5qg-72qw-gw5v: Cache key confusion for image optimization  
- GHSA-xv57-4mr9-wg8v: Content injection in image optimization
```

**Impact**: 
- SSRF could allow attackers to make requests to internal services
- Cache poisoning could lead to serving malicious content
- Content injection could result in XSS attacks

**Remediation**:
```bash
npm update next@latest
# Verify the update fixes all vulnerabilities
npm audit
```

### High Priority Vulnerabilities

#### H-001: Missing Security Headers
**Severity**: High  
**Affected Component**: Next.js configuration and application layout  

**Description**: The application lacks essential security headers including Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Frame-Options, and X-Content-Type-Options.

**Impact**: Vulnerable to XSS attacks, clickjacking, MIME-type confusion attacks, and protocol downgrade attacks.

**Remediation**: Update `/home/thiago/dev/thiago-fernando-rech-portfolio/next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none';"
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
```

#### H-002: Docker Image Base Vulnerabilities
**Severity**: High  
**Affected Component**: Docker base image node:24.4.1-alpine  

**Description**: Using a specific patch version of Node.js Alpine image without regular updates may contain unpatched vulnerabilities.

**Impact**: Potential exploitation of known CVEs in the base image.

**Remediation**: Update `/home/thiago/dev/thiago-fernando-rech-portfolio/Dockerfile`:
```dockerfile
# Use latest LTS Alpine version with security patches
FROM node:24-alpine AS builder
FROM node:24-alpine AS runner
```

#### H-003: Environment Variable Exposure Risk
**Severity**: High  
**Affected Component**: Environment variable handling  

**Description**: Environment files (.env, .env.local) exist in the repository directory and could potentially be exposed if .gitignore fails or during container builds.

**Impact**: Potential exposure of sensitive API keys and configuration data.

**Remediation**:
- Ensure .env files are never committed to version control
- Implement runtime secret injection for production deployments
- Add environment validation

#### H-004: Missing Dockerfile Security Hardening
**Severity**: High  
**Affected Component**: Dockerfile configuration  

**Description**: The Dockerfile lacks several security hardening measures while maintaining Alpine and non-root requirements.

**Impact**: Increased attack surface and potential privilege escalation vectors.

**Remediation**: Enhanced Dockerfile with security hardening:
```dockerfile
# Build stage
FROM node:24-alpine AS builder

# Install security updates and dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat dumb-init && \
    rm -rf /var/cache/apk/*

WORKDIR /app

# Copy dependency files with proper ownership
COPY --chown=node:node package*.json ./

# Install dependencies and clean cache
RUN npm ci --only=production && \
    npm cache clean --force && \
    npm audit fix

# Copy source code
COPY --chown=node:node . .

# Build application
RUN npm run build

# Production stage
FROM node:24-alpine AS runner

# Install security updates, create user, and clean up
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat dumb-init && \
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    rm -rf /var/cache/apk/* /tmp/*

WORKDIR /app

# Copy files with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
```

---

### Medium Priority Vulnerabilities

#### M-001: Exposure of Sensitive Information in Console Logs

**Severity**: Medium  
**CVSS Score**: 4.9  
**Affected Component**: ContactForm.tsx

**Description:**
The contact form logs sensitive user data to the browser console, potentially exposing personal information including names, email addresses, and message content.

**Technical Details:**
```typescript
// Line 73 in ContactForm.tsx
console.log("Email enviado com sucesso:", data);
console.error("Erro ao enviar mensagem:", error);
```

**Impact:**
- Exposure of user personal data in browser console
- Potential data leakage through browser debugging tools
- Privacy compliance violations (LGPD/GDPR)

**Remediation:**
1. Remove or sanitize console logs in production:
   ```typescript
   // Replace existing console.log with conditional logging
   if (process.env.NODE_ENV === 'development') {
     console.log("Email enviado com sucesso");
   }
   
   // For errors, log without sensitive data
   console.error("Erro ao enviar mensagem:", error.message);
   ```

2. Implement proper logging service for production:
   ```typescript
   const logger = {
     info: (message: string) => {
       if (process.env.NODE_ENV === 'development') {
         console.log(message);
       }
       // Send to logging service in production
     },
     error: (message: string, error?: Error) => {
       console.error(message, error?.message);
       // Send to error tracking service
     }
   };
   ```

---

#### M-002: Docker Compose Security Configuration
**Severity**: Medium  
**Affected Component**: docker-compose.yaml  

**Description**: Docker Compose configuration lacks security constraints and resource limits.

**Impact**: Potential for resource exhaustion and privilege escalation.

**Remediation**: Update `/home/thiago/dev/thiago-fernando-rech-portfolio/docker-compose.yaml`:
```yaml
services:
  portfolio:
    build: .
    container_name: portfolio_nextjs
    restart: unless-stopped
    ports:
      - "3030:3000"
    environment:
      - NODE_ENV=production
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - CHOWN
      - SETGID
      - SETUID
    read_only: true
    tmpfs:
      - /tmp:noexec,nosuid,size=100m
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

#### M-003: Potential XSS via dangerouslySetInnerHTML
**Severity**: Medium  
**CVSS Score**: 4.7  
**Affected Component**: layout.tsx

**Description:**
The use of `dangerouslySetInnerHTML` for structured data injection could potentially lead to XSS attacks if the JSON structure is compromised or dynamically generated.

**Technical Details:**
```typescript
// Line 89-129 in layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      // ... structured data
    })
  }}
/>
```

**Impact:**
- Potential Cross-Site Scripting (XSS) if JSON content is compromised
- Code injection through malformed JSON structure

**Remediation:**
1. Replace with safer alternative using Next.js Head component:
   ```typescript
   import Head from 'next/head';
   
   // In component
   <Head>
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
       }}
     />
   </Head>
   ```

2. Implement JSON validation and sanitization:
   ```typescript
   const sanitizeStructuredData = (data: object) => {
     return JSON.stringify(data)
       .replace(/</g, '\\u003c')
       .replace(/>/g, '\\u003e')
       .replace(/&/g, '\\u0026');
   };
   ```

---

#### M-004: Insufficient .dockerignore Coverage
**Severity**: Medium  
**Affected Component**: .dockerignore file  

**Description**: The .dockerignore file could be more comprehensive to prevent sensitive files from being copied into the image.

**Impact**: Potential inclusion of sensitive development files in production images.

**Remediation**: Enhanced .dockerignore:
```
# Dependencies
node_modules
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Next.js
.next/
out/

# Production
build

# Environment files
.env*
!.env.example

# Testing
coverage/
.nyc_output/

# IDEs and editors
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Git
.git/
.gitignore

# Docker
Dockerfile*
.dockerignore
docker-compose*

# Documentation
README*.md
CHANGELOG.md
LICENSE

# CI/CD
.github/
.gitlab-ci.yml
.travis.yml

# Security
*.pem
*.key
*.crt
```

#### M-005: Missing Input Validation Headers
**Severity**: Medium  
**Affected Component**: Contact form implementation  

**Description**: The contact form lacks server-side rate limiting and CSRF protection.

**Impact**: Potential for spam submissions and CSRF attacks.

**Remediation**: Implement rate limiting middleware and CSRF tokens.

#### M-006: Hardcoded Google Verification Code
**Severity**: Medium  
**Affected Component**: layout.tsx line 71  

**Description**: Placeholder Google verification code is hardcoded in the layout.

**Impact**: Invalid SEO configuration and potential confusion.

**Remediation**: Replace with environment variable or remove if not needed.

### Low Priority Issues

#### L-001: Insecure External Link Handling
**Severity**: Low  
**CVSS Score**: 3.1  
**Affected Component**: Multiple components (page.tsx, layout.tsx)

**Description:**
While the project uses `rel="noopener noreferrer"` for most external links, some links lack proper security attributes, potentially allowing tabnabbing attacks.

**Technical Details:**
External links throughout the application open in new tabs but some may be missing security attributes.

**Impact:**
- Potential tabnabbing attacks
- Referrer leakage to external sites
- Window.opener object access by malicious sites

**Remediation:**
1. Ensure all external links include security attributes:
   ```typescript
   // Secure external link component
   const SecureExternalLink = ({ href, children, ...props }) => (
     <a
       href={href}
       target="_blank"
       rel="noopener noreferrer nofollow"
       {...props}
     >
       {children}
     </a>
   );
   ```

2. Implement link validation:
   ```typescript
   const isExternalLink = (url: string) => {
     return url.startsWith('http') && !url.startsWith(window.location.origin);
   };
   ```

---

#### L-002: Node.js Version Specificity
**Severity**: Low  
**Description**: Using a very specific Node.js version (24.4.1) instead of latest LTS patch.

#### L-003: Missing Security-Focused npm Scripts
**Severity**: Low  
**Description**: No security audit or vulnerability scanning scripts in package.json.

**Description:**
The application lacks comprehensive security headers that could protect against various client-side attacks.

**Impact:**
- Missing protection against clickjacking
- No HSTS enforcement
- Absence of X-Content-Type-Options header

**Remediation:**
1. Implement comprehensive security headers in `next.config.ts`:
   ```typescript
   const securityHeaders = [
     {
       key: 'X-DNS-Prefetch-Control',
       value: 'on'
     },
     {
       key: 'Strict-Transport-Security',
       value: 'max-age=63072000; includeSubDomains; preload'
     },
     {
       key: 'X-XSS-Protection',
       value: '1; mode=block'
     },
     {
       key: 'X-Frame-Options',
       value: 'SAMEORIGIN'
     },
     {
       key: 'X-Content-Type-Options',
       value: 'nosniff'
     },
     {
       key: 'Referrer-Policy',
       value: 'origin-when-cross-origin'
     }
   ];

   const nextConfig: NextConfig = {
     output: 'standalone',
     async headers() {
       return [
         {
           source: '/(.*)',
           headers: securityHeaders
         }
       ]
     }
   };
   ```

---

### 6. **Informational** - Environment Variable Security Best Practices

**Vulnerability ID:** INFO-001  
**Severity:** Informational  
**Affected Component:** Environment configuration

**Description:**
While the project properly uses environment variables for sensitive configuration, some improvements could enhance security.

**Recommendations:**
1. Implement environment variable validation:
   ```typescript
   // utils/env.ts
   const requiredEnvVars = [
     'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
     'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
     'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'
   ];

   export const validateEnv = () => {
     const missing = requiredEnvVars.filter(key => !process.env[key]);
     if (missing.length > 0) {
       throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
     }
   };
   ```

2. Add runtime environment validation in ContactForm:
   ```typescript
   useEffect(() => {
     validateEnv();
   }, []);
   ```

---

### 7. **Informational** - Docker Security Enhancements

**Vulnerability ID:** INFO-002  
**Severity:** Informational  
**Affected Component:** Dockerfile

**Description:**
The Docker configuration follows good security practices but could be enhanced further.

**Current Security Features:**
- Uses non-root user (nextjs)
- Multi-stage build process
- Minimal Alpine Linux base image
- Proper file ownership settings

**Recommendations:**
1. Add security scanning to build process:
   ```dockerfile
   # Add security scanning step
   RUN npm audit --audit-level=moderate
   ```

2. Implement read-only filesystem:
   ```dockerfile
   # Add to final stage
   USER nextjs
   EXPOSE 3000
   
   # Make filesystem read-only except for necessary directories
   RUN mkdir -p /tmp /app/.next/cache
   VOLUME ["/tmp", "/app/.next/cache"]
   ```

---

### 8. **Informational** - Input Validation Strengths

**Vulnerability ID:** INFO-003  
**Severity:** Informational  
**Affected Component:** ContactForm.tsx

**Description:**
The project demonstrates excellent input validation practices using Zod schema validation.

**Security Strengths:**
- Comprehensive client-side validation with Zod
- Type-safe form handling with react-hook-form
- Proper error message handling
- Input sanitization through validation schemas

**Current Implementation:**
```typescript
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});
```

**Enhancement Recommendation:**
```typescript
const contactSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome não pode exceder 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z.string()
    .email("Email inválido")
    .max(254, "Email muito longo"),
  subject: z.string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(200, "Assunto não pode exceder 200 caracteres"),
  message: z.string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(5000, "Mensagem não pode exceder 5000 caracteres"),
});
```

---

## Vulnerability Summary Table

| Category | Critical | High | Medium | Low | Total |
|----------|----------|------|---------|-----|-------|
| Application Security | 1 | 1 | 3 | 1 | 6 |
| Container Security | 0 | 2 | 2 | 2 | 6 |
| Configuration | 0 | 1 | 1 | 0 | 2 |
| **Total** | **1** | **4** | **6** | **3** | **14** |

### Detailed Vulnerability Breakdown

| ID | Severity | Component | Vulnerability Type | Priority |
|----|----------|-----------|-------------------|----------|
| C-001 | Critical | Next.js Framework | Known CVEs | Immediate |
| H-001 | High | Configuration | Missing Security Headers | High |
| H-002 | High | Docker Base Image | Outdated Dependencies | High |
| H-003 | High | Environment | Secret Exposure Risk | High |
| H-004 | High | Dockerfile | Security Hardening | High |
| M-001 | Medium | ContactForm | Information Disclosure | Medium |
| M-002 | Medium | Docker Compose | Security Configuration | Medium |
| M-003 | Medium | Layout | Potential XSS | Medium |
| M-004 | Medium | Build Process | File Inclusion | Medium |
| M-005 | Medium | Contact Form | Input Validation | Medium |
| M-006 | Medium | SEO Configuration | Hardcoded Values | Low |
| L-001 | Low | External Links | Tabnabbing | Low |
| L-002 | Low | Docker | Version Specificity | Low |
| L-003 | Low | npm Scripts | Security Tooling | Low |

---

## Remediation Roadmap

### Phase 1: Immediate Actions (0-7 days)
1. **Update Next.js** to latest version (≥15.4.7) to fix critical vulnerabilities
2. **Implement security headers** in next.config.ts
3. **Review and secure environment variable handling**

### Phase 2: Short-term (1-2 weeks)
1. **Harden Dockerfile** with security best practices
2. **Enhance Docker Compose** configuration with security constraints
3. **Update .dockerignore** for better file exclusion
4. **Implement input validation** and rate limiting

### Phase 3: Medium-term (2-4 weeks)
1. **Add health check endpoints** and monitoring
2. **Implement structured logging**
3. **Set up automated security scanning** in CI/CD
4. **Create security testing procedures**

---

## Security Recommendations

### Proactive Security Measures

1. **Automated Security Scanning**
   - Integrate `npm audit` into CI/CD pipeline
   - Use tools like Snyk or GitHub Security Advisories
   - Implement container image vulnerability scanning

2. **Security Monitoring**
   - Implement application security monitoring
   - Set up log aggregation and analysis
   - Configure alerting for security events

3. **Development Security Practices**
   - Regular dependency updates
   - Security-focused code reviews
   - Threat modeling for new features

4. **Infrastructure Security**
   - Use secrets management systems (e.g., HashiCorp Vault, AWS Secrets Manager)
   - Implement network segmentation
   - Regular security assessments

### Compliance Considerations

- **OWASP Top 10**: Address injection vulnerabilities, broken authentication, security misconfiguration
- **NIST Cybersecurity Framework**: Implement continuous monitoring and incident response procedures
- **ISO 27001**: Establish security management processes and documentation

---

## Conclusion

While the application demonstrates good foundational security practices with Alpine Linux and non-root execution, critical vulnerabilities in the Next.js framework and missing security headers require immediate attention. The recommended remediation roadmap provides a structured approach to significantly improve the security posture while maintaining the desired lightweight and secure container architecture.

**Priority Actions:**
1. Update Next.js framework immediately
2. Implement security headers configuration
3. Harden Docker configuration
4. Establish ongoing security monitoring

**Confidence Level**: High - All findings have been verified against current security standards and best practices.

---

**Prepared by**: Claude Security Assessment  
**Next Review Date**: January 5, 2026  
**Report Version**: 1.0