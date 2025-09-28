import { FC } from 'react';

export const ProgressBar: FC = () => {
    return (
        <progress
            className="progress progress-primary w-72"
            value={50}
            max="100"
        />
    );
};
