FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_API_URL=https://wanderlust-backend-wot5c6gzla-ew.a.run.app

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]