export type TFlow = {
    flowName: string;
    version: string;
    startStep: string;
    steps: TStep[];
};

type TBaseStep = {
    id: string;
    type: string;
    next?: string;
    prev?: string;
    text?: string;
    label?: string;
    image?: string;
    actions?: TAction[];
};

export type TInfoStep = TBaseStep & { type: "info" };
export type TReviewStep = TBaseStep & { type: "review" };

export type TSelectStep = TBaseStep & {
    type: "select";
    options: TOption[];
};

export type TInputStep = TBaseStep & {
    type: "input";
    inputType: "text" | "date" | "phone";
    label: string;
    placeholder?: string;
    required?: boolean;
};

export type TTextareaStep = TBaseStep & {
    type: "textarea";
    label: string;
    required?: boolean;
};

export type TFileStep = TBaseStep & {
    type: "file";
    label: string;
    fileTypes: string[];
    required?: boolean;
};

export type TStep =
    | TInfoStep
    | TReviewStep
    | TSelectStep
    | TInputStep
    | TTextareaStep
    | TFileStep;

export type TAction = {
    label: string;
    action: string;
    className?: string;
    next?: string;
    prev?: string,

};
export type TOption = {
    label: string;
    value: string;
    className?: string;
    next: string;
    prev?: string,
};

export type TFlowAnswers = {
    [stepId: string]: any;
};
