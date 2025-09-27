# 1. Сборка приложения
FROM node:22 AS build

WORKDIR /app

RUN npm install -g npm@11.3.0

COPY package*.json ./
COPY . .

# Устанавливаем зависимости и собираем проект
RUN npm install --legacy-peer-deps
RUN npm run build

# 2. Отдача статики через Nginx
FROM nginx:1.25-alpine

# Копируем собранный фронт в папку Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Кастомный nginx.conf для SPA (чтобы работал react-router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]