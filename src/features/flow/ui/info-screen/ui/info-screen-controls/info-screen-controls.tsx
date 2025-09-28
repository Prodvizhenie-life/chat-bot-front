import { FC } from 'react';
import { TButtonAction } from '../../model/types/t-button-action';

export type TInfoScreenControlsProps = {
    buttons?: TButtonAction[];
};

export const InfoScreenControls: FC<TInfoScreenControlsProps> = ({
    buttons,
}) => {
    return (
        <>
            {buttons && (
                <div className="flex flex-col gap-2 w-full">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={button.className || 'btn-primary'}
                            onClick={button.onClick}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};
