
import { App } from '@/app/app';
import { ErrorBoundary } from '@/shared/ui/error-boundary/error-boundary';

function ErrorBoundaryError({ error }: { error: unknown }) {
  // Специально для запуска вне Telegram
  if (
    typeof error === "string" &&
    error.includes("Unable to retrieve launch parameters")
  ) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Web-версия чат-бота</h2>
        <p>Вы открыли приложение вне Telegram Mini App.<br />
          Некоторые функции Telegram недоступны.<br />
          Для полного функционала откройте бота внутри Telegram.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === 'string'
              ? error
              : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

export function Root() {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
        <App/>
    </ErrorBoundary>
  );
}
