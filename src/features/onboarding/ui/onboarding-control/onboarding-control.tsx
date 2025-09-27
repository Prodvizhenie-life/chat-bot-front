import { FC } from 'react';

type Props = {
    activeIdx: number;
    slidesCount: number;
    swiperRef: React.MutableRefObject<any>;
};

export const OnboardingControls: FC<Props> = ({ activeIdx, slidesCount, swiperRef }) => {
    const isLast = activeIdx === slidesCount - 1;

    const handleNext = () => {
        if (!isLast && swiperRef.current) swiperRef.current.slideNext();
    };
    const handleSkip = () => {
        if (swiperRef.current) swiperRef.current.slideTo(slidesCount - 1);
    };
    const handleStart = () => {
        // TODO: тут навигация или закрытие онбординга
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            {!isLast ? (
                <>
                    <button className="btn btn-ghost btn-outline " onClick={handleSkip}>Пропустить</button>
                    <button className="btn btn-primary" onClick={handleNext}>Далее</button>
                </>
            ) : (
                <button className="btn btn-primary w-full" onClick={handleStart}>Начать</button>
            )}
        </div>
    );
};
