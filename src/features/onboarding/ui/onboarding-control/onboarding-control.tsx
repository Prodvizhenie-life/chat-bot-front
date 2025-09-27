import { FC, useRef } from 'react';
import { useSwiper } from 'swiper/react';

export const OnboardingControls: FC = () => {
    const swiper = useSwiper();

    // Можно заменить на внешний стейт, если нужно.
    const isLast = swiper && swiper.activeIndex === swiper.slides.length - 1;

    // Обработчики
    const handleNext = () => {
        if (!isLast) swiper.slideNext();
    };
    const handleSkip = () => {
        swiper.slideTo(swiper.slides.length - 1);
    };
    const handleStart = () => {
        // TODO: тут навигация или закрытие онбординга
    };

    return (
        <div className="flex gap-2 w-full mt-6">
            {!isLast ? (
                <>
                    <button
                        className="btn btn-ghost flex-1"
                        onClick={handleSkip}
                    >
                        Пропустить
                    </button>
                    <button
                        className="btn btn-primary flex-1"
                        onClick={handleNext}
                    >
                        Далее
                    </button>
                </>
            ) : (
                <button
                    className="btn btn-primary w-full"
                    onClick={handleStart}
                >
                    Начать
                </button>
            )}
        </div>
    );
};
