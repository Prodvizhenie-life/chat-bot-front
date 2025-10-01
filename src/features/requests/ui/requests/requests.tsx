import { FC } from 'react';
import { RequestLayout } from '../request-layout/request-layout';
import { useNavigate } from 'react-router-dom';
import { RequestsList } from '../requests-list/requests-list';
import { TRequest } from '../../model/types/t-requests';

type TRequestProps = {
    requests: TRequest[];
}

export const Requests: FC<TRequestProps> = ({ requests }) => {
    const navigate = useNavigate();

    return (
        <RequestLayout 
            title='Мои заявки'
            description='Нажмите на заявку, чтобы посмотреть детали'
            actions={
                <button
                    className="btn btn-primary"
                    onClick={() => {navigate('/menu')}}
                >
                    В личный кабинет
                </button>
            }
        >
            <RequestsList requests={requests} />  
        </RequestLayout>
    );
};
