import { UseFormRegister, Path, FieldValues } from "react-hook-form";

type TInputFieldProps<T extends FieldValues> = {
    type: string;
    placeholder: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    error?: string;
    label?: string;
    multiline?: boolean;
    maxLength?: number;
};

export const InputField = <T extends FieldValues>({
    type,
    placeholder,
    register,
    name,
    error,
    label,
    multiline = false,
    maxLength,
}: TInputFieldProps<T>) => {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={name} className="block text-primary text-xs mb-1">
                    {label}
                </label>
            )}
            {multiline ? (
                <textarea
                    {...register(name)}
                    id={name}
                    placeholder={placeholder}
                    className="textarea textarea-primary w-full scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent"
                    maxLength={maxLength}
                />
            ) : (
                <input
                    {...register(name)}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className="input w-full input-primary"
                    maxLength={maxLength}
                    autoComplete={type === "password" ? "current-password" : "off"}
                />
            )}
            <span
                className={`block max-w-md text-ex-min h-2 mt-1 ${
                    error ? "text-error" : "text-transparent"
                }`}
            >
                {error || " "}
            </span>
        </div>
    );
};
