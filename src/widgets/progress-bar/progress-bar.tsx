import { FC, useMemo } from 'react';
import { TFlow } from '@/features/flow/model/types/t-flow';

type ProgressBarProps = {
    flow: TFlow;
    stepId: string;
};

export const ProgressBar: FC<ProgressBarProps> = ({ flow, stepId }) => {
    // Считаем только шаги, которые требуют ответа пользователя:
    const progressSteps = useMemo(
        () =>
            flow.steps.filter(
                (s) =>
                    s.type === 'input' ||
                    s.type === 'textarea' ||
                    s.type === 'select' ||
                    s.type === 'file'
            ),
        [flow.steps]
    );

    const currentIdx = progressSteps.findIndex((s) => s.id === stepId);
    // Если не нашли, значит это инфо/ревью/итоговый экран — показываем 100%
    const percent =
        currentIdx === -1
            ? 100
            : Math.round(((currentIdx + 1) / progressSteps.length) * 100);

    return (
        <progress
            className="progress progress-primary w-72"
            value={percent}
            max="100"
        />
    );
};
