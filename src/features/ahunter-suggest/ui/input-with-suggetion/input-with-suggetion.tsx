import { FC, useEffect, useState, useMemo } from 'react';
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/react';
import _ from 'lodash';

type Suggestion = { value: string };
type Props = {
    label?: string;
    placeholder?: string;
    value: string;
    onValueChange: (v: string) => void;
    suggestions?: Suggestion[];
    loading?: boolean;
    error?: string;
    required?: boolean;
    maxLength?: number;
};

export const InputWithSuggestions: FC<Props> = ({
    label,
    placeholder,
    value,
    onValueChange,
    suggestions = [],
    loading,
    error,
    required,
    maxLength,
}) => {
    const [query, setQuery] = useState(value || '');
    useEffect(() => {
        setQuery(value);
    }, [value]);

    const debouncedOnChange = useMemo(
        () => _.debounce(onValueChange, 200),
        [onValueChange]
    );

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
        debouncedOnChange(e.target.value);
    }

    return (
        <Combobox
            value={query}
            onChange={(val) => {
                if (val) {
                    setQuery(val);
                    onValueChange(val);
                }
            }}
        >
            <div className="relative">
                <ComboboxInput
                    className="w-full border px-3 py-2"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                    required={required}
                    maxLength={maxLength}
                />
                {loading && (
                    <span className="absolute right-2 top-2">Загрузка...</span>
                )}
                {suggestions && suggestions.length > 0 && (
                    <ComboboxOptions className="absolute z-10 bg-white border rounded w-full mt-1 shadow">
                        {suggestions.map((s, i) => (
                            <ComboboxOption key={i} value={s.value}>
                                {s.value}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                )}
                {error && (
                    <div className="text-red-600 text-sm mt-1">{error}</div>
                )}
            </div>
        </Combobox>
    );
};
