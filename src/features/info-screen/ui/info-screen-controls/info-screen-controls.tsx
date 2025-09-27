import { FC } from 'react';

export type TInfoScreenControlsProps = {
  buttons: Array<{
    text: string;
    variant: 'primary' | 'ghost';
    onClick: () => void;
    disabled?: boolean;
  }>;
};

export const InfoScreenControls: FC<TInfoScreenControlsProps> = ({ buttons }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`btn ${button.variant === 'ghost' ? 'btn-ghost btn-outline' : `btn-${button.variant}`} w-full`}
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
