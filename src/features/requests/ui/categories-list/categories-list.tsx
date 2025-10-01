import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetMainFlowQuery } from '@/features/flow/api/flow-api';

type TCategoriesListProps = {
  categories: any[];
};

export const CategoriesList: FC<TCategoriesListProps> = ({ categories }) => {
  const { data: flow } = useGetMainFlowQuery('flow/main-flow.json');

  // Функция для поиска первого шага в категории
  const getFirstStepId = (categoryId: string): string | null => {
    const firstStep = flow?.steps.find(
      (step) => step.category === categoryId && step.isFirst === true
    );
    return firstStep?.id || null;
  };

  return (
    <ul className="w-full flex flex-col gap-5 mt-6">
      {categories.map((category) => {
        const firstStepId = getFirstStepId(category.id);
        
        // Если первый шаг не найден, не показываем ссылку
        if (!firstStepId) {
          return null;
        }

        return (
          <li key={category.id}>
            <Link to={`/bot-flow/${firstStepId}`}>
              <div className="flex items-center justify-between gap-3 border rounded-3xl py-3 px-5 text-primary hover:bg-base-200">
                <p className="text-sm font-medium truncate">
                  {category.label}
                </p>
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
        );
      })}
    </ul>
  );
};