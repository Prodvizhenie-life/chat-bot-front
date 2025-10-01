import { FC } from 'react';

type TRequestStatusProps = {
    status: string;
}

const statusText: Record<string, string> = {
  draft: 'Черновик',
  submitted: 'Отправлена',
  denied: 'Отклонена',
  revision: 'На редакции',
}

const statusClassName: Record<string, string> = {
  draft: 'status',
  submitted: 'status status-success',
  denied: 'status status-error',
  revision: 'status status-warning',
}


export const RequestsStatus: FC<TRequestStatusProps> = ({ status }) => {
  return (
    <div className='flex items-center gap-1'>
      <div 
        aria-label={statusText[status]} 
        className={statusClassName[status]}
      ></div>
      <p className="text-xs text-base-content/60 truncate">
        {statusText[status]}
      </p>
    </div>
  );
};
