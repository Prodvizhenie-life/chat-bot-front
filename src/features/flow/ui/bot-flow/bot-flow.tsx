import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, generatePath } from 'react-router-dom';
import { setAnswer } from '../../model/flow-slice';
import { InputStep } from '../input-step/input-step';
import { TextareaStep } from '../textarea-step/textarea-step';
import { SelectStep } from '../select-step/select-step';
import { FileStep } from '../file-step/file-step';
import { InfoStep } from '../info-step/info-step';
import { ReviewStep } from '../review-step/review-step';
import { TFlow } from '../../model/types/t-flow';
import { ProgressBar } from '@/widgets/progress-bar/progress-bar';
import { FlowStepLayout } from '../flow-step-layout/flow-step-layout';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { TRootState } from '@/app/store/store';
import { EXTERNAL_ACTION_PREFIX } from '../../lib/constants/EXTERNAL_ACTION_PREFIX';
import { externalRoutes } from '../../lib/constants/external-routes';

export const BotFlow: FC<{ flow: TFlow; stepId: string }> = ({
    flow,
    stepId,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const answers = useSelector((state: TRootState) => state.flow.answers);

    const step = flow.steps.find((s) => s.id === stepId);
    if (!step) return <div>Нет данных по шагу</div>;

    const goBack = () => navigate(-1);

    const goNextFlow = useCallback(
        (nextId?: string | null) => {
            if (!nextId) return;
            navigate(generatePath('/bot-flow/:id', { id: nextId }));
        },
        [navigate]
    );

    const goExternal = useCallback(
        (action?: string) => {
            if (!action) return false;
            if (!action.startsWith(EXTERNAL_ACTION_PREFIX)) return false;
            const key = action.slice(EXTERNAL_ACTION_PREFIX.length);
            const target = externalRoutes[key];
            if (!target) {
                console.warn(`Unknown external action: ${action}`);
                return true;
            }
            const path =
                typeof target === 'function' ? target(answers) : target;
            navigate(path);
            return true;
        },
        [answers, navigate]
    );

    const handleAction = useCallback(
        (payload?: { action?: string; next?: string | null }) => {
            if (!payload) return;
            if (goExternal(payload.action)) return;
            if (payload.next) {
                goNextFlow(payload.next);
                return;
            }
        },
        [goExternal, goNextFlow]
    );

    const handleNext = () => handleAction({ next: step.next });

    switch (step.type) {
        case 'input':
            return (
                <FlowStepLayout
                    menu={<BurgerMenu />}
                    progress={<ProgressBar flow={flow} stepId={stepId} />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                                disabled={step.required && !answers[step.id]}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <InputStep
                        text={step.text || ''}
                        label={step.label || ''}
                        placeholder={step.placeholder || ''}
                        value={answers[step.id] ?? ''}
                        onValueChange={(v) =>
                            dispatch(setAnswer({ stepId: step.id, value: v }))
                        }
                        error={
                            step.required && !answers[step.id]
                                ? 'Это поле обязательно'
                                : undefined
                        }
                        inputType={step.inputType}
                        required={step.required}
                    />
                </FlowStepLayout>
            );
        case 'textarea':
            return (
                <FlowStepLayout
                    menu={<BurgerMenu />}
                    progress={<ProgressBar flow={flow} stepId={stepId} />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                                disabled={step.required && !answers[step.id]}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <TextareaStep
                        label={step.label || ''}
                        placeholder={step.placeholder || ''}
                        text={step.text || ''}
                        value={answers[step.id] ?? ''}
                        onValueChange={(v) =>
                            dispatch(setAnswer({ stepId: step.id, value: v }))
                        }
                        error={
                            step.required && !answers[step.id]
                                ? 'Это поле обязательно'
                                : undefined
                        }
                        required={step.required}
                    />
                </FlowStepLayout>
            );
        case 'select':
            return (
                <FlowStepLayout
                    menu={<BurgerMenu />}
                    progress={<ProgressBar flow={flow} stepId={stepId} />}
                    actions={
                        <button className="btn" onClick={goBack}>
                            Назад
                        </button>
                    }
                >
                    <SelectStep
                        text={step.text || ''}
                        options={step.options || []}
                        value={answers[step.id]}
                        onSelect={(val, opt) => {
                            dispatch(
                                setAnswer({ stepId: step.id, value: val })
                            );
                            handleAction({
                                action: opt?.action,
                                next: opt?.next,
                            });
                        }}
                    />
                </FlowStepLayout>
            );
        case 'file':
            return (
                <FlowStepLayout
                    menu={<BurgerMenu />}
                    progress={<ProgressBar flow={flow} stepId={stepId} />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <FileStep
                        label={step.label || ''}
                        text={step.text}
                        onFileChange={(file) =>
                            dispatch(
                                setAnswer({ stepId: step.id, value: file })
                            )
                        }
                    />
                </FlowStepLayout>
            );
        case 'info':
            return (
                <div className="h-full w-full">
                    <InfoStep
                        text={step.text}
                        image={step.image}
                        actions={step.actions}
                        onAction={handleAction}
                    />
                </div>
            );
        case 'review':
            return <ReviewStep text={step.text || ''} onNext={handleNext} />;
        default:
            return <div>Неизвестный тип шага</div>;
    }
};
