import { FC } from 'react';
import { Link } from 'react-router-dom';

type TCategoriesListProps = {
  categories: any[];
  requestId?: string;
};

export const CategoriesList: FC<TCategoriesListProps> = ({ categories, requestId }) => {
  return (
    <ul className="w-full flex flex-col gap-5 mt-6">
      {categories.map((category) => (
        <li key={category.id}>
          <Link to={`/requests/${requestId}/categories/${category.id}`}>
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
      ))}
    </ul>
  )
};
