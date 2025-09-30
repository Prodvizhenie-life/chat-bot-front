import { FC, useRef } from 'react';
import {
    formatRuPhoneForView,
    denormalizeViewToE164,
    normalizeRuPhone,
} from '@/shared/lib/formatters/phone';

type Props = {
    label?: string;
    placeholder?: string;
    value: string; // E.164, например: +79991234567
    onValueChange: (v: string) => void;
    error?: string;
    required?: boolean;
    maxLength?: number;
};

export const InputPhoneRu: FC<Props> = ({
    label,
    placeholder = '+7 999 999-99-99',
    value,
    onValueChange,
    error,
    required,
    maxLength = 18,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Для отображения: +7 999 999-99-99
    const rawDigits = normalizeRuPhone(value || '');
    const viewMasked = formatRuPhoneForView(rawDigits);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = denormalizeViewToE164(e.target.value);
        onValueChange(newValue);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text');
        const norm = normalizeRuPhone(pasted);
        onValueChange(denormalizeViewToE164(formatRuPhoneForView(norm)));
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleClear = () => {
        onValueChange('');
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block mb-1 text-sm font-medium text-base-content">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    ref={inputRef}
                    type="tel"
                    className={`input input-bordered input-primary w-full pr-10 ${
                        error ? 'input-error' : ''
                    }`}
                    placeholder={placeholder}
                    value={viewMasked}
                    onChange={handleInput}
                    onPaste={handlePaste}
                    inputMode="tel"
                    autoComplete="tel"
                    required={required}
                    maxLength={maxLength}
                />
                {!!value && (
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
            </div>
            {error && <div className="text-error text-xs mt-1">{error}</div>}
        </div>
    );
};
