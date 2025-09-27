import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    activeIdx: number;
    slidesCount: number;
    swiperRef: React.MutableRefObject<any>;
};

export const OnboardingControls: FC<Props> = ({ activeIdx, slidesCount, swiperRef }) => {
    const navigate = useNavigate();
    const isLast = activeIdx === slidesCount - 1;

    const handleNext = () => {
        if (!isLast && swiperRef.current) swiperRef.current.slideNext();
    };
    const handleSkip = () => {
        navigate('/login')
    };

    const handleStart = () => {
        // TODO: тут навигация или закрытие онбординга
        navigate('/login')
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
