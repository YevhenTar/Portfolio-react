import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.scss';
import projects from './projects';

const LOCAL_STORAGE_KEY = 'lastSlideIndex';

const Slider = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const savedIndex = parseInt(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (!isNaN(savedIndex) && savedIndex >= 0 && swiperRef.current) {
            swiperRef.current.slideTo(savedIndex, 0);
        }
    }, []);

    return (
        <div className="home-section__swiper">
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    localStorage.setItem(LOCAL_STORAGE_KEY, swiper.activeIndex);
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a
                            href={project.url} // ← внешний адрес
                            className="swiper-slide__link"
                            onClick={() => {
                                localStorage.setItem(LOCAL_STORAGE_KEY, index); // ← сохраняем индекс
                            }}
                        >
                            <img
                                src={project.img}
                                alt={project.caption}
                                className="swiper-slide__image"
                            />
                        </a>
                        <div className="swiper-slide__caption-block">
                            <p className="swiper-slide__caption">{project.caption}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
