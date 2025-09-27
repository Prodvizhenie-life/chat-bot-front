import { FC, useRef, useState } from 'react';
import { SlideList } from '../slide-list/slide-list';
import { slides } from '../../lib/slides';
import { OnboardingControls } from '../onboarding-control/onboarding-control';

export const Onboarding: FC = () => {
    const swiperRef = useRef(null);

    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-between max-w-xs mx-auto py-6"
            style={{ minHeight: '100vh' }}
        >
             <SlideList slides={slides} swiperRef={swiperRef} onSlideChange={setActiveIdx} />
            <OnboardingControls
                activeIdx={activeIdx}
                slidesCount={slides.length}
                swiperRef={swiperRef}
            />
        </div>
    );
};
