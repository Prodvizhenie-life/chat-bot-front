import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RequestsStatus } from './request-status/request-status';
import { TRequest } from '../../model/types/t-requests';

type TRequestListProps = {
  requests: TRequest[];
};

export const RequestsList: FC<TRequestListProps> = ({ requests }) => {
  return (
    <>
      {requests && requests.length > 0 ? (
        <ul className="w-full flex flex-col gap-5 mt-6">
          {requests.map((request) => (
            <li key={request.id}>
              <Link to={`/requests/${request.id}/categories`}>
                <div className="flex items-center justify-between gap-3 border rounded-3xl py-3 px-5 text-primary hover:bg-base-200">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">
                      Заявка №{request.id}
                    </h3>
                    <RequestsStatus status={request.status} />
                  </div>
                  <svg
                    className="w-5 h-5 text-base-content/30 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <p>Пока что заявок нет</p>
          <Link to="/">
            <p className="text-center text-primary underline font-medium">
              Нажмите сюда, чтобы заполнить анкету
            </p>
          </Link>
        </div>
      )}
    </>
  );
};
