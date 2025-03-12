import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SlideDesktop1 from '../../../assets/slide-desktop1.png';
import SlideDesktop2 from '../../../assets/slide-desktop2.png';
import SlideDesktop3 from '../../../assets/slide-desktop3.png';
import SlideMobile1 from '../../../assets/slide-mobile1.png';
import SlideMobile2 from '../../../assets/slide-mobile2.png';
import SlideMobile3 from '../../../assets/slide-mobile3.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from './Slider.module.css';

const Slider = () => {
    const slides = [
        {
            id: 1,
            slideDesktop: SlideDesktop1,
            slideMobile: SlideMobile1,
        },
        {
            id: 2,
            slideDesktop: SlideDesktop2,
            slideMobile: SlideMobile2,
        },
        {
            id: 3,
            slideDesktop: SlideDesktop3,
            slideMobile: SlideMobile3,
        },
    ];

    const styleSwiper = {
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#000',
        '--swiper-pagination-bottom': '10px',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-horizontal-gap': '8px',
    }

    return (
        <Swiper
            style={styleSwiper}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={true}
            className={style.mySwiper}
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                    <img src={slide.slideDesktop} className={style.imgDesktop} />
                    <img src={slide.slideMobile} className={style.imgMobile} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider