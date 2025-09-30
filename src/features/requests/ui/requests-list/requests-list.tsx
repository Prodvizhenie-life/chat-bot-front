import { FC } from 'react';
import { RequestLayout } from '../request-layout/request-layout';
import { Link } from 'react-router-dom';

export const RequestsList: FC = () => {
    return (
        <RequestLayout 
            title='Мои заявки'
            description='Нажмите на заявку, чтобы посмотреть детали'
            actions={
                <button
                    className="btn btn-primary"
                    onClick={() => {}}
                >
                    В личный кабинет
                </button>
            }
        >
            <div className='flex flex-col items-center gap-5'>
                <p>Пока что заявок нет</p>
                <Link to={'/'} >
                    <p className='text-center text-primary underline font-medium'>Нажмите сюда, чтобы заполнить анкету</p>
                </Link>
            </div>
        </RequestLayout>
    );
};
