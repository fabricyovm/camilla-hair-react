import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaWhatsapp } from "react-icons/fa";
import Button from '../../../components/Button';
import openWhatsapp from '../../../utils/openWhatsapp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from './Slider.module.css';


import slideDesktop1 from '../images/banner-desktop1.jpg'
import slideDesktop2 from '../images/banner-desktop2.jpg'

const Slider = () => {
    const styleSwiper = {
        '--swiper-pagination-color': '#000',
        '--swiper-pagination-bottom': '10px',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-horizontal-gap': '8px',
    }

    return (
        <Swiper
            style={styleSwiper}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: false }}
            autoplay={true}
            className={style.mySwiper}
        >
            <SwiperSlide>
                <div className={style.containerSlider}>
                    <img src={slideDesktop1} className={style.imgDesktop} />
                    <div className={style.containerTextBanner}>
                        <div className="container">
                            <div className={style.contentBanner}>
                                <p className={style.decoratedText}>
                                    Camilla Sousa
                                </p>
                                <p className={style.titleBanner}>
                                    HAIR STYLIST
                                </p>
                                <p className={style.subTitleBanner}>
                                    ANOS DE EXPERIÊNCIA
                                </p>
                                <p className={style.textBanner}>
                                    Transforme seu visual com a ajuda de uma especialista! Agende seu horário agora e tenha uma experiência única de cuidados para o seu cabelo.
                                </p>
                                <Button text="Agendar agora" icon={<FaWhatsapp />} marginTop='2rem' action={openWhatsapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.containerSlider}>
                    <img src={slideDesktop2} className={style.imgDesktop} />
                    
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider