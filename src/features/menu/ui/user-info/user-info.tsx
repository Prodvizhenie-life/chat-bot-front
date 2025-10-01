import { TUser } from '@/entities/user/model/t-user';
import { Avatar } from '@/shared/ui/avatar/avatar';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type UserInfoProps = {
  user: TUser;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const fullName = `${user.lastName} ${user.firstName} ${user.patronymic}`;
  
  return (
    <Link 
      className="p-4 border-t border-base-300 cursor-pointer hover:bg-base-200 transition-colors"
      to={'/profile'}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Avatar 
            image={user.image} 
            name={fullName} 
            rounded={true} 
            size="sm"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium truncate">{fullName}</h3>
            <p className="text-xs text-base-content/40 truncate">{user.email}</p>
          </div>
        </div>
        <svg className="w-5 h-5 text-base-content/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
