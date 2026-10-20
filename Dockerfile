FROM node:lts-slim AS base
WORKDIR /app
COPY --from=oven/bun:1.3 /usr/local/bin/bun /usr/local/bin/bun

FROM base AS deps
WORKDIR /app
COPY package.json ./
RUN bun install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["bun", "start"]
