import { FC } from 'react';
import { InputField } from '@/shared/ui/input-field/input-field';

type Props = {
    label: string;
    value: string;
    text: string;
    placeholder: string;
    onValueChange: (v: string) => void;
    error?: string;
    required?: boolean;
    maxLength?: number;
};

export const TextareaStep: FC<Props> = ({
    label,
    value,
    onValueChange,
    error,
    maxLength = 1024,
    placeholder,
    text,
}) => (
    <>
        {text && <div className="mb-2 font-medium">{text}</div>}
        <InputField
            type="text"
            label={label}
            placeholder={placeholder}
            multiline
            value={value}
            onValueChange={onValueChange}
            error={error}
            maxLength={maxLength}
        />
    </>
);
