// features/onboarding/ui/slide-item/slide-item.tsx
import { FC } from 'react';

export type TSlideItemProps = {
  step: number;
  img?: string;
  text: string;
  alt?: string;
};

export const SlideItem: FC<TSlideItemProps> = ({ img, text, alt }) => {
  return (
    <li className="flex flex-col items-center gap-4 text-center">
      {img ? <img className="w-full rounded-sm" src={img} alt={alt || ''} /> : null}
      <p>{text}</p>
    </li>
  );
};
