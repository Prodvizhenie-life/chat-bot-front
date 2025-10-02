import { FC, ReactNode } from 'react';

type TRequestLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
};

export const RequestLayout: FC<TRequestLayoutProps> = ({
  title,
  description,
  children,
  actions,
}) => (
  <div className="max-w-xs mx-auto w-full h-screen flex flex-col py-6">
    {/* Заголовок */}
    <div className="flex flex-col gap-3 flex-shrink-0">
      <h2 className="font-medium text-xl">{title}</h2>
      <p className="text-sm text-neutral/80">{description}</p>
    </div>

    {/* Основной контент */}
    <div className="w-full flex-1 overflow-y-auto mt-4">
      {children}
    </div>

    {/* Кнопки снизу */}
    {actions && (
      <div className="flex flex-col gap-2 w-full flex-shrink-0 mt-4">
        {actions}
      </div>
    )}
  </div>
);
