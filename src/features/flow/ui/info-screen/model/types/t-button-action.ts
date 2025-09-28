export type TButtonAction = {
    label: string;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}