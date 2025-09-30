import { FC, useRef, useState } from "react";

type Props = {
    label: string;
    onFileChange: (file: File) => void;
    error?: string;
};

export const FileStep: FC<Props> = ({ label, onFileChange, error }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            onFileChange(selectedFile);

            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <label className="text-sm font-medium">{label}</label>

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="btn btn-outline text-primary"
            >
                Нажмите, чтобы загрузить файл
            </button>

            <input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
            />

            {file && (
                <div className="flex items-center justify-between gap-1.5">
                    <div className="flex gap-1.5 items-center text-primary min-w-0 flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 flex-shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>
                        <p className="text-sm truncate">{file.name}</p>
                    </div>
                    <button type="button" onClick={handleRemoveFile} className="flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-black hover:text-red-500 transition-colors ease-in"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {error && <span className="text-error text-xs">{error}</span>}
        </div>
    );
};
