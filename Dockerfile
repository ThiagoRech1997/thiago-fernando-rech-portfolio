# Build stage
FROM node:24.4.1-alpine AS builder

# Instalar dependências necessárias para build
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar todas as dependências (incluindo devDependencies para build)
RUN npm ci && npm cache clean --force

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Production stage
FROM node:24.4.1-alpine AS runner

# Criar usuário não-privilegiado
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Instalar dependências necessárias para runtime
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar apenas arquivos necessários para produção
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Mudar propriedade dos arquivos para o usuário nextjs
RUN chown -R nextjs:nodejs /app

# Mudar para usuário não-privilegiado
USER nextjs

# Expor porta
EXPOSE 3000

# Variável de ambiente para produção
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", ".next/standalone/server.js"]