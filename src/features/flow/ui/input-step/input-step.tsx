import { FC } from 'react';
import { InputField } from '@/shared/ui/input-field/input-field';

type Props = {
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
    );
};
