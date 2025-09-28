import cn from 'classnames';

export type TLoadingProps = {
    color:
    | 'text-primary'
    | 'text-accent'
    | 'text-neutral'
    | 'text-info'
    | 'text-success'
    | 'text-warning'
    | 'text-error';
    type: 'loading-spinner' | 'loading-bars' | 'loading-infinity' | 'loading-ball' | 'loading-ring' | 'loading-dots';
    size: 'loading-xs' | 'loading-sm' | 'loading-md' | 'loading-lg';
    className?: string;
};

export const Loading = ({ color, type, size, className }: TLoadingProps) => {
    return (
        <div className={className}>
            <span
                className={cn('loading', type, size, color)}
            ></span>
        </div>
    );
};
