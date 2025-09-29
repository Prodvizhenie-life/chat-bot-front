import { FC } from 'react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  label: string;
  path: string;
  icon?: string;
};

export const MenuItem: FC<MenuItemProps> = ({ label, path, icon }) => {
  return (
    <li className="cursor-pointer hover:bg-base-200 transition-colors">
      <Link 
        to={path}
        className="flex gap-3 p-3"
      >
        {icon && <span className="text-md">{icon}</span>}
        <span className="text-md">{label}</span>
      </Link>
    </li>
  );
};