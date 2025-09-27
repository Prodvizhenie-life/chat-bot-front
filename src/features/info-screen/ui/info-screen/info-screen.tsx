import { FC } from 'react';
import { InfoScreenContent } from '../info-screen-content/info-screen-content';
import { InfoScreenControls } from '../info-screen-controls/info-screen-controls';
import { TInfoScreenProps } from '../../model/types/t-info-screen';

export const InfoScreen: FC<TInfoScreenProps> = ({
  img,
  text,
  alt,
  buttons
}) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-between max-w-xs mx-auto py-6"
      style={{ minHeight: '100vh' }}
    >
      <InfoScreenContent
        img={img}
        text={text}
        alt={alt}
      />
      <InfoScreenControls buttons={buttons} />
    </div>
  );
};
