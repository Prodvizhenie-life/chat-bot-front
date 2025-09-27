import { FC } from 'react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
  label: string;
  path: string;
  icon?: string;
};

export const MenuItem: FC<MenuItemProps> = ({ label, path, icon }) => {
  return (
    <Link
      to={path}
      className="flex gap-2 p-3 cursor-pointer hover:bg-base-200 transition-colors"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-md">{label}</span>
    </Link>
  );
};