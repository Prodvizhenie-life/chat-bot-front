import { FC } from 'react';
import { TOption } from '../../model/types/t-flow';

type Props = {
    text: string;
    options: TOption[];
    value?: string;
    onSelect: (value: string, next: string) => void;
};

export const SelectStep: FC<Props> = ({ text, options, value, onSelect }) => (
    <div className="flex flex-col justify-center gap-4 h-full w-full">
        {text && <div className="mb-2 font-medium">{text}</div>}
        {options.map((opt) => (
            <button
                key={opt.value}
                type="button"
                className={`btn w-full ${
                    value === opt.value ? 'btn-primary' : 'btn-outline'
                }`}
                onClick={() => onSelect(opt.value, opt.next)}
            >
                {opt.label}
            </button>
        ))}
    </div>
);
