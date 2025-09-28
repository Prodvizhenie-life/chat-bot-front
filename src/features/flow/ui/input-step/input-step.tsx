import { FC } from 'react';
import { InputField } from '@/shared/ui/input-field/input-field';

type Props = {
    text: string;
    label: string;
    placeholder: string;
    value: string;
    onValueChange: (v: string) => void;
    error?: string;
    inputType: 'text' | 'date' | 'phone';
    required?: boolean;
    autoComplete?: string;
    maxLength?: number;
};

export const InputStep: FC<Props> = ({
    text,
    label,
    placeholder,
    value,
    onValueChange,
    error,
    inputType,
    autoComplete,
    maxLength = 256,
}) => {
    const type =
        inputType === 'date' ? 'date' : inputType === 'phone' ? 'tel' : 'text';

    return (
        <div className="flex flex-col justify-center gap-4 h-full w-full">
        {text && <div className="mb-2 font-medium">{text}</div>}
        <InputField
            type={type}
            label={label}
            placeholder={placeholder}
            value={value}
            onValueChange={onValueChange}
            error={error}
            autoComplete={autoComplete}
            inputMode={
                inputType === 'phone'
                    ? 'tel'
                    : inputType === 'date'
                    ? 'numeric'
                    : undefined
            }
            maxLength={maxLength}
        />
    </div>
    );
};
