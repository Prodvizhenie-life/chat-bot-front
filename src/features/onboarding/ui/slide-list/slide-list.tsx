// features/onboarding/ui/slide-list/slide-list.tsx
import { FC, useRef } from 'react';
import { SlideItem, type TSlideItemProps } from '../slide-item/slide-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export type TSlideListProps = {
    slides: TSlideItemProps[];
    swiperRef?: React.MutableRefObject<any>;
    onSlideChange?: (activeIdx: number) => void;
};

export const SlideList: FC<TSlideListProps> = ({ slides, swiperRef, onSlideChange }) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="w-full h-[300px]"
            onSwiper={swiper => {
                if (swiperRef) swiperRef.current = swiper;
            }}
            onSlideChange={swiper => {
                if (onSlideChange) onSlideChange(swiper.activeIndex);
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.step}>
                    <SlideItem {...slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
