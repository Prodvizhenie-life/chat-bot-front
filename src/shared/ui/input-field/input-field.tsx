import React from "react";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

type TInputFieldProps<T extends FieldValues> = {
  type: string;
  placeholder: string;

  // RHF (uncontrolled)
  register?: UseFormRegister<T>;
  name?: Path<T>;

  // Controlled
  value?: string;
  onValueChange?: (next: string) => void;

  error?: string;
  label?: string;
  multiline?: boolean;
  maxLength?: number;

  // Дополнительно
  id?: string;
  isEditable?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  onInput?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const InputField = <T extends FieldValues>({
  type,
  placeholder,
  register,
  name,
  value,
  onValueChange,
  error,
  label,
  multiline = false,
  maxLength,
  id,
  isEditable = true,
  inputMode,
  autoComplete,
  onInput,
  onPaste,
}: TInputFieldProps<T>) => {
  // RHF привязка — только если переданы и name, и register
  const rhf = name && register ? register(name) : undefined;
  const inputId = id ?? String(name ?? placeholder);

  // Универсальный onChange: передаём событие в RHF И строковое значение наружу
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    rhf?.onChange?.(e);                  // RHF (uncontrolled)
    if (onValueChange) onValueChange(e.target.value); // Controlled канал
  };

  const commonProps = {
    ref: (rhf as any)?.ref,
    name: rhf?.name,
    onBlur: rhf?.onBlur,
    id: inputId,
    placeholder,
    maxLength,
    onChange: handleChange,
    onInput,
    onPaste,
    disabled: isEditable === false,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${inputId}-error` : undefined,
    className: `w-full ${multiline ? "textarea textarea-primary scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent" : "input input-primary"} ${error ? "input-error" : ""}`,
    // controlled value — только если передан value
    ...(value !== undefined ? { value } : {}),
  } as const;

  return (
    <div className="w-full relative">
      {label && (
        <label htmlFor={inputId} className="block text-primary text-xs mb-1">
          {label}
        </label>
      )}

      {multiline ? (
        <textarea {...(commonProps as any)} />
      ) : (
        <input
          {...(commonProps as any)}
          type={type}
          inputMode={inputMode}
          autoComplete={
            autoComplete ?? (type === "password" ? "current-password" : "off")
          }
        />
      )}

      <span
        id={`${inputId}-error`}
        className={`block max-w-md text-ex-min h-2 mt-1 ${
          error ? "text-error" : "text-transparent"
        }`}
      >
        {error || " "}
      </span>
    </div>
  );
};
