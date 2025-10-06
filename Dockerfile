# Build stage
FROM node:24.4.1-alpine AS builder

# Atualizar pacotes para patches de segurança e instalar dependências mínimas
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat dumb-init && \
    rm -rf /var/cache/apk/*

WORKDIR /app

# Copiar arquivos de dependências primeiro para cache de layers
COPY package*.json ./

# Instalar dependências e limpar cache em uma única layer
RUN npm ci --only=production && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/tmp/*

# Instalar devDependencies temporariamente para build
RUN npm ci && npm cache clean --force

# Copiar código fonte
COPY . .

# Aceitar build args e definir como env vars para o build
ARG NEXT_PUBLIC_CV_URL
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

ENV NEXT_PUBLIC_CV_URL=$NEXT_PUBLIC_CV_URL
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

# Build da aplicação e remover devDependencies
RUN npm run build && \
    npm prune --production && \
    rm -rf /tmp/* /var/tmp/* ~/.npm

# Production stage - imagem mínima
FROM node:24.4.1-alpine AS runner

# Instalar apenas o essencial para runtime e segurança
RUN apk update && apk upgrade && \
    apk add --no-cache dumb-init && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

# Criar usuário não-privilegiado
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Copiar apenas arquivos essenciais do build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Remover arquivos desnecessários e definir permissões
RUN find /app -type f -name "*.md" -delete && \
    find /app -type f -name "*.txt" -delete && \
    chmod -R 755 /app && \
    chown -R nextjs:nodejs /app

# Mudar para usuário não-privilegiado
USER nextjs

# Expor porta
EXPOSE 3000

# Variáveis de ambiente para produção e segurança
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Usar dumb-init para proper signal handling
ENTRYPOINT ["dumb-init", "--"]

# Comando para iniciar a aplicação
CMD ["node", "server.js"]