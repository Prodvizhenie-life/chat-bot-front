import { useGetAddressSuggestionsQuery, useGetPersonSuggestionsQuery } from '@/features/ahunter-suggest/api/ahunter-suggest-api';
import { InputWithSuggestions } from '@/features/ahunter-suggest/ui/input-with-suggetion/input-with-suggetion';
import { InputField } from '@/shared/ui/input-field/input-field';
import { FC } from 'react';

type Props = {
    text: string;
    label: string;
    placeholder: string;
    value: string;
    onValueChange: (v: string) => void;
    error?: string;
    inputType: 'text' | 'date' | 'phone' | 'fio' | 'city';
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
    required
}) => {
    // Вариант с подсказками для ФИО
    if (inputType === 'fio') {
        const { data, isFetching } = useGetPersonSuggestionsQuery(value, { skip: !value });
        const suggestions = (data?.suggestions ?? []).map(s => ({ value: s.value }));
        return (
            <div className="flex flex-col justify-center gap-4 h-full w-full">
                {text && <div className="mb-2 font-medium">{text}</div>}
                <InputWithSuggestions
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={onValueChange}
                    suggestions={suggestions}
                    loading={isFetching}
                    error={error}
                    required={required}
                    maxLength={maxLength}
                />
            </div>
        );
    }

    // Вариант с подсказками для города
    if (inputType === 'city') {
        const { data, isFetching } = useGetAddressSuggestionsQuery(value, { skip: !value });
        const suggestions = (data?.suggestions ?? []).map(s => ({ value: s.value }));
        return (
            <div className="flex flex-col justify-center gap-4 h-full w-full">
                {text && <div className="mb-2 font-medium">{text}</div>}
                <InputWithSuggestions
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={onValueChange}
                    suggestions={suggestions}
                    loading={isFetching}
                    error={error}
                    required={required}
                    maxLength={maxLength}
                />
            </div>
        );
    }

    // Остальные типы — стандартно
    const type =
        inputType === 'date'
            ? 'date'
            : inputType === 'phone'
            ? 'tel'
            : 'text';

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
