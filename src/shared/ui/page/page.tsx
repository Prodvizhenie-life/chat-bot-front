import { useNavigate } from 'react-router-dom';
import { hideBackButton, isTMA, onBackButtonClick, showBackButton } from '@telegram-apps/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';

export function Page({ children, back = true }: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   */
  back?: boolean
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

  return <>{children}</>;
}
