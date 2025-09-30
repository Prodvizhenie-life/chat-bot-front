import { FC, useEffect, useState, useMemo, useRef } from 'react';
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
    const inputRef = useRef<HTMLInputElement>(null);

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

    function handleClear() {
        setQuery('');
        onValueChange('');
        setTimeout(() => inputRef.current?.focus(), 0);
    }

    return (
        <div className="w-full">
            {label && (
                <label className="block mb-1 text-sm font-medium text-base-content">
                    {label}
                </label>
            )}
            <Combobox
                value={query}
                onChange={(val) => {
                    if (val !== null) {
                        setQuery(val);
                        onValueChange(val);
                    }
                }}
            >
                <div className="relative">
                    <ComboboxInput
                        ref={inputRef}
                        className={`
                            input input-bordered input-primary w-full pr-10
                            ${error ? 'input-error' : ''}
                        `}
                        placeholder={placeholder}
                        value={query}
                        onChange={handleInputChange}
                        required={required}
                        maxLength={maxLength}
                        autoComplete="off"
                    />
                    {!!query && (
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-base-content opacity-60 hover:opacity-100"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleClear}
                            aria-label="Очистить"
                            tabIndex={-1}
                        >
                            ✕
                        </button>
                    )}
                    {loading && (
                        <span className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-primary animate-spin">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                        </span>
                    )}
                    {suggestions.length > 0 && (
                        <ComboboxOptions
                            className="
                            absolute left-0 z-30 bg-base-100 border border-primary rounded-xl shadow-lg
                            max-h-60 mt-1 w-full overflow-auto
                        "
                        >
                            {suggestions.map((s, i) => (
                                <ComboboxOption
                                    key={s.value + i}
                                    value={s.value}
                                    className="cursor-pointer select-none"
                                >
                                    {({ focus, selected }) => (
                                        <span
                                            className={`
                                                block px-4 py-3 text-base transition-colors
                                                ${
                                                    focus
                                                        ? 'bg-primary/10 text-primary font-semibold'
                                                        : ''
                                                }
                                                ${
                                                    selected
                                                        ? 'bg-primary/20'
                                                        : ''
                                                }
                                            `}
                                        >
                                            {s.value}
                                        </span>
                                    )}
                                </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                    )}
                </div>
            </Combobox>
            {error && <div className="text-error text-xs mt-1">{error}</div>}
        </div>
    );
};
