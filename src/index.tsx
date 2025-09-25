import '@telegram-apps/telegram-ui/dist/styles.css';

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/app/store/store';
import { Root } from '@/app/root.tsx';

import { setIsTelegram } from '@/features/env-mode/model/env-mode';
import { init } from '@/init.ts';
import { EnvUnsupported } from './shared/ui/env-unsupported/env-unsupported.tsx';

import './index.css';
// Мок окружения для локальной разработки вне Telegram
import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

async function bootstrap() {
    const launchParams = retrieveLaunchParams();
    const isTelegram = !!launchParams.tgWebAppPlatform;
    const platform = launchParams.tgWebAppPlatform;
    const debug =
        (launchParams.tgWebAppStartParam || '').includes('platformer_debug') ||
        import.meta.env.DEV;

    // Кладём признак среды в store ДО рендера приложения
    store.dispatch(setIsTelegram(isTelegram));

    // Инициализация только для Telegram Mini App
    if (isTelegram) {
        await init({
            debug,
            eruda: debug && ['ios', 'android'].includes(platform),
            mockForMacOS: platform === 'macos',
        });
    }

    // Рендерим приложение (и веб, и Telegram версию)
    root.render(
        <StrictMode>
            <ReduxProvider store={store}>
                <Root />
            </ReduxProvider>
        </StrictMode>
    );
}

bootstrap().catch(() => {
    // В случае критической ошибки рендерим заглушку
    root.render(<EnvUnsupported />);
});
