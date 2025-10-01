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
    <div className="max-w-xs mx-auto w-full min-h-screen flex flex-col items-center py-6">
        {/* Заголовок */}
        <div className="flex flex-col gap-3">
            <h2 className="font-medium text-xl">{title}</h2>
            <p className="text-sm text-neutral/80">{description}</p>
        </div>

        {/* Основное содержимое */}
        <div className="w-full flex-1 flex flex-col items-center">
            {children}
        </div>

        {/* Кнопки снизу */}
        {actions && (
            <div className="flex flex-col gap-2 w-full">
                {actions}
            </div>
        )}
    </div>
);
