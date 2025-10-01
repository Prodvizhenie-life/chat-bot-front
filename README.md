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

## Деплой проекта

По умолчанию используется GitHub Pages, но можно заливать на любой CDN, Vercel, Heroku и т.д.

### Сборка проекта

```bash
npm run build
