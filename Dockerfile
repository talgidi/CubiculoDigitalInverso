FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

# ======================
# BUILDER
# ======================
FROM base AS builder
WORKDIR /app

# pnpm: instalar localmente en un prefijo escribible para evitar fallos de permisos
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME/node_modules/.bin:$PATH
RUN npm install -g pnpm@10.28.1 --prefix $PNPM_HOME --no-fund --no-audit

# copiar monorepo completo
COPY . .

# instalar TODAS las dependencias del workspace usando la ruta absoluta a pnpm
RUN /pnpm/bin/pnpm install --frozen-lockfile

# build ordenado (usar ruta absoluta para evitar problemas de PATH)
RUN /pnpm/bin/pnpm --filter @repo/db build
RUN /pnpm/bin/pnpm --filter @repo/db exec prisma generate
RUN /pnpm/bin/pnpm --filter @repo/api build

# ======================
# RUNNER
# ======================
FROM base AS runner
WORKDIR /app


# copiar SOLO lo necesario para runtime (incluimos node_modules y PNPM_HOME)
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /pnpm /pnpm

# Instalar dependencias de producción en runtime para asegurar paquetes faltantes
# Permitir instalar aun si el lockfile no está perfectamente sincronizado
RUN /pnpm/bin/pnpm install --prod --no-frozen-lockfile
COPY --from=builder /app/packages/db ./packages/db

# usuario no root (Back4App-friendly)
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001
USER nodejs

# No ejecutar instalación en runtime; usamos los artefactos copiados del builder

EXPOSE 4000
CMD ["node", "dist/main.js"]
