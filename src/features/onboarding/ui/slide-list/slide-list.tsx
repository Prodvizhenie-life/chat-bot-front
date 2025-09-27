// features/onboarding/ui/slide-list/slide-list.tsx
import { FC } from 'react';
import { SlideItem, type TSlideItemProps } from '../slide-item/slide-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export type TSlideListProps = { slides: TSlideItemProps[] };

export const SlideList: FC<TSlideListProps> = ({ slides }) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="w-full"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.step}>
                    <SlideItem {...slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
