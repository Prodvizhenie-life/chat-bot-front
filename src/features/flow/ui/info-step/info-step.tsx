import { FC } from 'react';
import { TAction } from '../../model/types/t-flow';

type Props = {
    text?: string;
    image?: string;
    actions?: TAction[];
    onAction: (action: TAction) => void;
};

export const InfoStep: FC<Props> = ({ text, image, actions, onAction }) => (
    <div className="flex flex-col gap-4 items-center">
        {image && <img src={image} alt="" className="max-w-xs" />}
        {text && <p className="text-base">{text}</p>}
        {actions && (
            <div className="flex flex-col gap-2 w-full">
                {actions.map((action, idx) => (
                    <button
                        key={action.label + idx}
                        type="button"
                        className={action.className || 'btn btn-primary'}
                        onClick={() => onAction(action)}
                    >
                        {action.label}
                    </button>
                ))}
            </div>
        )}
    </div>
);
