import { FC } from 'react';
import { TAction } from '../../model/types/t-flow';
import { InfoScreen } from '../info-screen/ui/info-screen/info-screen';

type Props = {
    text?: string;
    image?: string;
    actions?: TAction[];
    onAction: (action: TAction) => void;
};

export const InfoStep: FC<Props> = ({ text, image, actions, onAction }) => (
    <div className="flex flex-col h-full justify-between items-center">
        <InfoScreen img={image} alt="" text={text}/>
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
