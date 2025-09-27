import { FC } from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type AvatarProps = {
  image?: string;
  name: string;
  rounded?: boolean;
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: 'w-8', text: 'text-xs' },
  sm: { container: 'w-12', text: 'text-sm' },
  md: { container: 'w-16', text: 'text-lg' },
  lg: { container: 'w-24', text: 'text-xl' },
  xl: { container: 'w-32', text: 'text-3xl' }
};

export const Avatar: FC<AvatarProps> = ({image, name, rounded = false, size = 'xl'}) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const roundedClass = rounded ? 'rounded-full' : 'rounded-3xl';
  const sizeConfig = sizeClasses[size];

  return (
    image ? (
      <div className="avatar">
        <div className={`${sizeConfig.container} ${roundedClass}`}>
          <img src={image} alt={`аватар пользователя ${name}`}/>
        </div>
      </div>
    ) : (
      <div className="avatar avatar-placeholder">
        <div className={`bg-primary text-neutral-content ${sizeConfig.container} ${roundedClass}`}>
          <span className={sizeConfig.text}>{firstLetter}</span>
        </div>
      </div>
    )
  );
}
