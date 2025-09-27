import { DataJson } from '@/shared/ui/data-json/data-json';
import { FC } from 'react';
import { SlideList } from '../slide-list/slide-list';
import { slides } from '../../lib/slides';

export const Onboarding: FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <SlideList
                slides={slides}
            />
        </div>
    );
};
