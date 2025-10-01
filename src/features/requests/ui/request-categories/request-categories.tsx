import { FC } from 'react';
import { RequestLayout } from '../request-layout/request-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoriesList } from '../categories-list/categories-list';

type TRequestCategoriesProps = {
  categories: any[];
}

export const RequestCategories: FC<TRequestCategoriesProps> = ({ categories }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <RequestLayout 
            title={`Заявка №${id}`}
            description='Выберите раздел, который хотите посмотреть или отредактировать'
            actions={
              <>
                <button
                    className="btn"
                    onClick={() => {navigate('/requests')}}
                >
                  К списку заявок
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {navigate('/menu')}}
                >
                  В личный кабинет
                </button>
              </>
            }
        >
          <CategoriesList categories={categories} requestId={id} />
        </RequestLayout>
    );
};
