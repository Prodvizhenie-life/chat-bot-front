import { useNavigate } from 'react-router-dom';
import {
    hideBackButton,
    isTMA,
    onBackButtonClick,
    showBackButton,
} from '@telegram-apps/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';
import cn from 'classnames';

export function Page({
    children,
    back = true,
    footer = false,
    className,
}: PropsWithChildren<{
    back?: boolean;
    footer?: boolean;
    className?: string;
}>) {
    const navigate = useNavigate();

    useEffect(() => {
        // Показываем/скрываем кнопки только если реально Mini App
        if (isTMA()) {
            if (back) {
                showBackButton();
                const unsubscribe = onBackButtonClick(() => {
                    navigate(-1);
                });
                return unsubscribe; // корректно удаляем подписку
            } else {
                hideBackButton();
            }
        }
        // В web-режиме ничего не делаем!
    }, [back, navigate]);

    return (
        <div
            className={cn(
                'bg-base-100 w-[100vw] min-h-[100vh] relative',
                className,
                { ['pb-16']: footer }
            )}
        >
            {children}
            {footer ? <div /> : null}
        </div>
    );
}
