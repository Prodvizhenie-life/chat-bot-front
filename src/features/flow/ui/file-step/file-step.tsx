import { FC } from 'react';

type Props = {
    label: string;
    onFileChange: (file: File) => void;
    error?: string;
    required?: boolean;
};

export const FileStep: FC<Props> = ({ label, onFileChange, error }) => (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-sm">{label}</label>
        <input
            type="file"
            onChange={(e) => {
                if (e.target.files?.[0]) {
                    onFileChange(e.target.files[0]);
                }
            }}
            className="input input-bordered"
        />
        {error && <span className="text-error text-xs">{error}</span>}
    </div>
);
