export type TRequestStatus =
  | 'draft'
  | 'submitted'
  | 'denied'
  | 'revision'

export type TRequestUser = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

export type TRequestCategory = {
  id: string;      // например: "general" | "details" | "documents"
  label: string;   // "Общая информация"
  completed: boolean;
};

export type TRequestAnswers = Record<string, string | boolean | number | null>;

export type TRequest = {
  id: string;
  status: TRequestStatus;
  createdAt: string;  // ISO-строка
  updatedAt: string;  // ISO-строка
  user: TRequestUser;
  categories: TRequestCategory[];
  answers: TRequestAnswers;
};

export type TRequestsResponse = {
  requests: TRequest[];
};
