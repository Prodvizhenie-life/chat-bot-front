import { FC, ReactNode } from "react"

export const FormWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="min-w-md bg-base-100 p-8 max-w-md">{children}</div>
}
