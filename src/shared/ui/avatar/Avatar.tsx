import { FC } from 'react';

type AvatarProps = {
  image?: string;
  name: string;
  rounded?: boolean;
}

export const Avatar: FC<AvatarProps> = ({image, name, rounded = false}) => {
  const firstLetter = name.charAt(0).toLocaleUpperCase();

  const roundedClass = rounded ? 'rounded-full' : 'rounded-xl';

  return (
    image ? (
      <div className="avatar">
        <div className={`w-24 ${roundedClass}`}>
          <img src={image} alt={`аватар пользователя ${name}`}/>
        </div>
      </div>
    ) : (
      <div className="avatar avatar-placeholder">
        <div className={`bg-primary text-neutral-content w-24 ${roundedClass}`}>
          <span className="text-3xl">{firstLetter}</span>
        </div>
      </div>
    )
  )
}
