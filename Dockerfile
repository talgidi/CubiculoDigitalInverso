FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

# ======================
# BUILDER
# ======================
FROM base AS builder
WORKDIR /app

# pnpm: instalar localmente en un prefijo escribible para evitar fallos de permisos
ENV PNPM_HOME=/pnpm
# Ensure npm global bin and node_modules binaries are on PATH
ENV PATH=$PNPM_HOME/bin:$PNPM_HOME/node_modules/.bin:$PATH
RUN npm install -g pnpm@10.28.1 --prefix $PNPM_HOME --no-fund --no-audit

# copiar monorepo completo
COPY . .

# instalar TODAS las dependencias del workspace
RUN pnpm install --frozen-lockfile

# build ordenado
RUN pnpm --filter @repo/db build
RUN pnpm --filter @repo/db exec prisma generate
RUN pnpm --filter @repo/api build

# ======================
# RUNNER
# ======================
FROM base AS runner
WORKDIR /app


# copiar SOLO lo necesario para runtime (incluimos node_modules y PNPM_HOME)
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /pnpm /pnpm

# usuario no root (Back4App-friendly)
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001
USER nodejs

# No ejecutar instalación en runtime; usamos los artefactos copiados del builder

EXPOSE 4000
CMD ["node", "dist/main.js"]
