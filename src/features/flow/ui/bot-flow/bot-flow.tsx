import { TRootState } from '@/app/store/store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { Menu } from '../menu/menu';

export const BotFlow: FC<{ flow: TFlow; stepId: string }> = ({
    flow,
    stepId,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const answers = useSelector((state: TRootState) => state.flow.answers);

    const step = flow.steps.find((s: any) => s.id === stepId);
    if (!step) return <div>Нет данных по шагу</div>;

    // Назад
    const goBack = () => {
        navigate(-1);
    };

    // Далее
    const goNext = (nextId?: string) => {
        if (nextId) navigate(`/bot-flow/${nextId}`);
    };

    switch (step.type) {
        case 'input':
            return (
                <FlowStepLayout
                    menu={<Menu />}
                    progress={<ProgressBar />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => goNext(step.next)}
                                disabled={step.required && !answers[step.id]}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <InputStep
                        text={step.text || ''}
                        label={step.label}
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
                    menu={<Menu />}
                    progress={<ProgressBar />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => goNext(step.next)}
                                disabled={step.required && !answers[step.id]}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <TextareaStep
                        label={step.label}
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
                    menu={<Menu />} 
                    progress={<ProgressBar />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                        </>
                    }
                >
                    <SelectStep
                        text={step.text || ''}
                        options={step.options}
                        value={answers[step.id]}
                        onSelect={(val, next) => {
                            dispatch(
                                setAnswer({ stepId: step.id, value: val })
                            );
                            goNext(next);
                        }}
                    />
                </FlowStepLayout>
            );
        case 'file':
            return (
                <FlowStepLayout
                    menu={<Menu />}
                    progress={<ProgressBar />}
                    actions={
                        <>
                            <button className="btn" onClick={goBack}>
                                Назад
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => goNext(step.next)}
                            >
                                Далее
                            </button>
                        </>
                    }
                >
                    <FileStep
                        label={step.label}
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
                        onAction={(action) => goNext(action.next)}
                    />
                </div>
            );
        case 'review':
            return (
                <ReviewStep
                    text={step.text || ''}
                    onNext={() => goNext(step.next)}
                />
            );
        default:
            return <div>Неизвестный тип шага</div>;
    }
};
