import { FC } from 'react';
import { InfoScreenContent } from '../info-screen-content/info-screen-content';
import { TInfoScreenProps } from '../../model/types/t-info-screen';

export const InfoScreen: FC<TInfoScreenProps> = ({ img, text, alt }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-between max-w-xs">
            <InfoScreenContent img={img} text={text} alt={alt} />
        </div>
    );
};
