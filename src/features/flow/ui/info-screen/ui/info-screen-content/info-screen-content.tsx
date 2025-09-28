import { FC } from 'react';

export type TInfoScreenContentProps = {
  img?: string;
  text?: string;
  alt?: string;
};

export const InfoScreenContent: FC<TInfoScreenContentProps> = ({ 
  img, 
  text, 
  alt 
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {img && (
        <img 
          className="w-full rounded-sm mb-4" 
          src={img} 
          alt={alt || ''} 
        />
      )}
      <p className="text-lg">{text}</p>
    </div>
  );
};
