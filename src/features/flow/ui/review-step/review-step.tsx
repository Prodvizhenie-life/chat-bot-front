import { FC } from 'react';

type Props = {
    text: string;
    onNext: () => void;
};

export const ReviewStep: FC<Props> = ({ text, onNext }) => (
    <div className="flex flex-col gap-4 items-center">
        <p className="text-base">{text}</p>
        <button className="btn btn-primary" onClick={onNext}>
            Далее
        </button>
    </div>
);
