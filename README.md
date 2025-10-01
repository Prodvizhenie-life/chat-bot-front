# Telegram Mini App: Фонд «Продвижение»

Это фронтенд Telegram Mini App для чат-бота фонда «Продвижение».  
Приложение работает как внутри Telegram (бот с Mini App), так и как часть веб-виджета на сайте.

---

## 🚀 Быстро посмотреть

- [Демо-страница с виджетом](https://dvizhenie-widget.website.yandexcloud.net/)
- [Открыть Mini App в Telegram](https://t.me/prod_prodvizhenie_bot/app_prod)

---

## Используемые технологии

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)
- [Vite](https://vitejs.dev/)

---

## Как запустить локально

1. Установить зависимости:
    ```bash
    npm install
    ```
2. Запустить в режиме разработки с HTTPS:
    ```bash
    npm run dev:https
    ```

> На первом запуске может понадобиться ввести пароль для генерации SSL-сертификата (используется [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert)).

Откройте в браузере [https://localhost:5173](https://localhost:5173) или используйте любой из адресов, выведенных в консоли.

---

## Работа в Telegram

> Mini App открывается по кнопке из [@prod_prodvizhenie_bot](https://t.me/prod_prodvizhenie_bot/app_prod) или через демо-виджет на сайте.

---


# Telegram Mini App: Фонд «Продвижение»

Это фронтенд Telegram Mini App для чат-бота фонда «Продвижение».

Приложение работает:
- как Mini App внутри Telegram ([бот](https://t.me/prod_prodvizhenie_bot/app_prod)),
- а также как часть веб-виджета на сайте (см. демо ниже).

---

## 🚀 Быстро посмотреть

- [Демо-страница с виджетом](https://dvizhenie-widget.website.yandexcloud.net/)
- [Mini App прямо в Telegram](https://t.me/prod_prodvizhenie_bot/app_prod)

---

## Используемые технологии

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)
- [Vite](https://vitejs.dev/)

---

## Как запустить локально

1. Установить зависимости:
    ```bash
    npm install
    ```
2. Запустить в режиме разработки с HTTPS:
    ```bash
    npm run dev:https
    ```

> На первом запуске может понадобиться ввести пароль для генерации SSL-сертификата (используется [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert)).

Откройте в браузере [https://localhost:5173](https://localhost:5173) или используйте любой из адресов, выведенных в консоли.

---

## Работа в Telegram

Mini App открывается по кнопке из [@prod_prodvizhenie_bot](https://t.me/prod_prodvizhenie_bot/app_prod) или через демо-виджет на сайте.

---

## Деплой/развёртывание приложения

### Рекомендуемый способ — через Docker-контейнер

Проект полностью готов к развёртыванию в контейнере.  
В продакшене фронтенд собирается и отдаётся через Nginx с кастомной конфигурацией (SPA, кэширование, поддержка роутинга).

### Сборка и запуск через Docker Compose

1. **Создайте образ и запустите сервис:**
    ```bash
    docker compose up --build -d
    ```
    По умолчанию приложение будет доступно на [http://localhost:8080](http://localhost:8080)  
    (порт можно изменить через переменную окружения `PORT_APP`).

2. **Если используете только Docker:**
    ```bash
    docker build -t prodvizhenie-bot-front .
    docker run -d -p 8080:80 --name prodvizhenie-bot-front prodvizhenie-bot-front
    ```

---

### Деплой проекта (Альтернатива)

По умолчанию используется GitHub Pages, но можно заливать на любой CDN, Vercel, Heroku и т.д.
