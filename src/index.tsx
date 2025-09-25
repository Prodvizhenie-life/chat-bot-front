import '@telegram-apps/telegram-ui/dist/styles.css';

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { isTMA, retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/app/store/store';
import { Root } from '@/app/root.tsx';

import { setIsTelegram } from '@/features/env-mode/model/env-mode';
import { init } from '@/init.ts';
import { EnvUnsupported } from './shared/ui/env-unsupported/env-unsupported.tsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

async function bootstrap() {
    let isTelegram = false;
    try {
        isTelegram = isTMA(); // синхронно, безопасно
    } catch {
        isTelegram = false;
    }

    store.dispatch(setIsTelegram(isTelegram));

    if (isTelegram) {
        try {
            const launchParams = retrieveLaunchParams();
            const platform = launchParams.tgWebAppPlatform;
            const debug =
                (launchParams.tgWebAppStartParam || '').includes('platformer_debug') ||
                import.meta.env.DEV;

            await init({
                debug,
                eruda: debug && ['ios', 'android'].includes(platform),
                mockForMacOS: platform === 'macos',
            });
        } catch (e) {
            // Если не получилось инициализировать Telegram — fallback
            root.render(<EnvUnsupported />);
            return;
        }
    }

    root.render(
        <StrictMode>
            <ReduxProvider store={store}>
                <Root />
            </ReduxProvider>
        </StrictMode>
    );
}

bootstrap().catch(() => {
    root.render(<EnvUnsupported />);
});
