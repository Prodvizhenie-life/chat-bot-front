import { InputWithSuggestions } from '@/features/ahunter-suggest/ui/input-with-suggetion/input-with-suggetion';
import { InputPhoneRu } from '@/shared/ui/input-phone-ru/input-phone-ru';
import { InputField } from '@/shared/ui/input-field/input-field';
import { useGetAddressSuggestionsQuery, useGetPersonSuggestionsQuery } from '@/features/ahunter-suggest/api/ahunter-suggest-api';
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
    // Сразу получаем все хуки (без условий)
    const personSuggestions = useGetPersonSuggestionsQuery(value, { skip: inputType !== 'fio' || !value });
    const addressSuggestions = useGetAddressSuggestionsQuery(value, { skip: inputType !== 'city' || !value });

    // ФИО с подсказками
    if (inputType === 'fio') {
        const suggestions = (personSuggestions.data?.suggestions ?? []).map(s => ({ value: s.value }));
        return (
            <div className="flex flex-col justify-center gap-4 h-full w-full">
                {text && <div className="mb-2 font-medium">{text}</div>}
                <InputWithSuggestions
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={onValueChange}
                    suggestions={suggestions}
                    loading={personSuggestions.isFetching}
                    error={error}
                    required={required}
                    maxLength={maxLength}
                />
            </div>
        );
    }

    // Город (адрес) с подсказками
    if (inputType === 'city') {
        const suggestions = (addressSuggestions.data?.suggestions ?? []).map(s => ({ value: s.value }));
        return (
            <div className="flex flex-col justify-center gap-4 h-full w-full">
                {text && <div className="mb-2 font-medium">{text}</div>}
                <InputWithSuggestions
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={onValueChange}
                    suggestions={suggestions}
                    loading={addressSuggestions.isFetching}
                    error={error}
                    required={required}
                    maxLength={maxLength}
                />
            </div>
        );
    }

    // Телефон с маской (InputPhoneRu)
    if (inputType === 'phone') {
        return (
            <div className="flex flex-col justify-center gap-4 h-full w-full">
                {text && <div className="mb-2 font-medium">{text}</div>}
                <InputPhoneRu
                    label={label}
                    value={value}
                    onValueChange={onValueChange}
                    error={error}
                    required={required}
                    maxLength={18}
                />
            </div>
        );
    }

    // Обычные поля: текст, дата и т.д.
    const type =
        inputType === 'date'
            ? 'date'
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
                inputMode={inputType === 'date' ? 'numeric' : undefined}
                maxLength={maxLength}
            />
        </div>
    );
};
