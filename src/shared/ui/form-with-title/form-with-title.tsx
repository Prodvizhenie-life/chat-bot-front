import type { FC, ReactNode } from "react"
import { FormLink } from "../form-link/form-link"
import { TNullable } from "@/shared/model/types/t-nullable"

export type TFormWithTitleProps = {
  title: string
  onSubmit: () => void
  submitButtonText: string
  children: ReactNode
  isLoading?: boolean
  isDisabledSubmitBtn?: boolean
  formLink?: {
    label: string
    text: string
    href: string
  }
  error: TNullable<string>
}

export const FormWithTitle: FC<TFormWithTitleProps> = ({
  title,
  onSubmit,
  submitButtonText,
  children,
  isLoading = false,
  isDisabledSubmitBtn = false,
  formLink,
  error,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 w-full flex flex-col gap-12 items-center justify-between"
    >
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {children}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading || isDisabledSubmitBtn}
        >
          {isLoading ? (
            <span className="loading loading-infinity text-primary"></span>
          ) : (
            <span>{submitButtonText}</span>
          )}
        </button>
        <span
          className={`block max-w-md text-ex-min h-2 ${error ? "text-error" : "text-transparent"}`}
        >
          {error || " "}
        </span>
        {formLink && (
          <FormLink
            label={formLink.label}
            href={formLink.href}
            text={formLink.text}
          />
        )}
      </div>
    </form>
  )
}
