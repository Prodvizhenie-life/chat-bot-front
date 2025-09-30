import { FC, ReactNode } from 'react';

type TFlowStepLayoutProps = {
    children: ReactNode;
    actions?: ReactNode;
    progress?: ReactNode;
    menu?: ReactNode;
};

export const FlowStepLayout: FC<TFlowStepLayoutProps> = ({
    children,
    actions,
    progress,
    menu,
}) => (
    <div className="w-full h-full flex flex-col bg-base-100 relative">
        {/* Верхний блок с меню и прогрессом */}
        <div className="flex flex-col items-center justify-between px-4">
            <div>{menu}</div>
            <div className="flex-1 flex justify-center">{progress}</div>
            <div className="w-8" />
        </div>
        {/* Основной контент */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
            {children}
        </div>
        {/* Кнопки внизу */}
        <div className="flex flex-col gap-2 w-full max-w-xs mx-auto px-4 pb-6">
            {actions}
        </div>
    </div>
);
