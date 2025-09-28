import { FC, useRef, useState } from 'react';
import { SlideList } from '../slide-list/slide-list';
import { OnboardingControls } from '../onboarding-control/onboarding-control';
import { useGetOnboardingFlowQuery } from '@/features/flow/api/flow-api';
import { DataJson } from '@/shared/ui/data-json/data-json';
import { Loading } from '@/shared/ui/loading/loading';

export const Onboarding: FC = () => {
    const swiperRef = useRef(null);
    const {
        data: flow,
        isLoading,
        error,
    } = useGetOnboardingFlowQuery('flow/onboarding-flow.json');

    const [activeIdx, setActiveIdx] = useState(0);

    if (error) return <DataJson data={error} />;
    if (isLoading)
        return (
            <Loading
                className="w-full h-full flex items-center justify-center"
                color="text-primary"
                size="loading-xs"
                type="loading-infinity"
            />
        );

    return (
        <div
            className="w-full h-full flex flex-col items-center justify-between max-w-xs mx-auto py-6"
            style={{ minHeight: '100vh' }}
        >
            <SlideList
                slides={flow?.slides || []}
                swiperRef={swiperRef}
                onSlideChange={setActiveIdx}
            />
            <OnboardingControls
                activeIdx={activeIdx}
                slidesCount={flow?.slides.length || 0}
                swiperRef={swiperRef}
            />
        </div>
    );
};
