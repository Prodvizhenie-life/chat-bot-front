// Тип для всего сценария
type TFlow = {
    flowName: string;
    version: string;
    startStep: string;
    steps: TStep[];
};

// Универсальный шаг с обязательными полями
type TBaseStep = {
    id: string;
    type: string;
    text?: string;
    label?: string;
    next?: string | null;
    prev?: string | null;
};

// Для шагов типа "info"
type TInfoStep = TBaseStep & {
    type: "info";
    image?: string;
    actions?: TAction[];
};

// Для шагов выбора
type TSelectStep = TBaseStep & {
    type: "select";
    options: TOption[];
};

// Для полей ввода
type TInputStep = TBaseStep & {
    type: "input";
    inputType: "text" | "date" | "phone";
    label: string;
    placeholder?: string;
    required?: boolean;
};

// Для многострочного текста
type TTextareaStep = TBaseStep & {
    type: "textarea";
    label: string;
    required?: boolean;
};

// Для загрузки файлов
type TFileStep = TBaseStep & {
    type: "file";
    label: string;
    fileTypes: string[];
    required?: boolean;
};

// Для шага проверки
type TReviewStep = TBaseStep & {
    type: "review";
};

// Универсальные типы для действий и опций
type TAction = {
    label: string;
    action: string;
    className?: string;
    next?: string | null;
};

type TOption = {
    label: string;
    value: string;
    next: string;
};

// Объединённый тип шага
type TStep =
    | TInfoStep
    | TSelectStep
    | TInputStep
    | TTextareaStep
    | TFileStep
    | TReviewStep;
