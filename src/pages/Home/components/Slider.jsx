import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide from './Slide';
import Button from '../../../components/Button';
import openWhatsapp from '../../../utils/openWhatsapp';
import style from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroBackground from '../images/hero-background.jpg'
import BannerDesktop2 from '../images/banner-desktop2.jpg'
import BannerDesktop3 from '../images/banner-desktop3.jpg'

const Slider = () => {
    const styleSwiper = {
        '--swiper-pagination-color': '#000',
        '--swiper-pagination-bottom': '10px',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-horizontal-gap': '8px',
    }

    const contentSlides = [
        {
            id: 1,
            background: HeroBackground,
            title: "HAIR STYLIST",
            subTitle: "SEU CABELO NAS MÃOS DE QUEM ENTENDE",
            decoratedText: "Camilla Sousa",
            description: "Transforme seu visual com a ajuda de uma especialista! Agende seu horário agora e tenha uma experiência única de cuidados para o seu cabelo.",
            button: <Button text="Agendar agora" variant='hero' action={openWhatsapp} />,
        },
        {
            id: 2,
            background: BannerDesktop3,
            title: "PREMIUM",
            subTitle: "UTILIZAMOS OS MELHORES PRODUTOS DO MERCADO",
            decoratedText: "Produtos",
            description: "Priorizamos a qualidade e os melhores resultados para os seus cabelos. Por isso, trabalhamos exclusivamente com as marcas mais renomadas do mercado: Joico, Wella e Truss. Confie no cuidado que você merece!",
            variantContent: "left"
        },
    ]

    return (
        <Swiper
            style={styleSwiper}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: false }}
            autoplay={false}
            className={style.mySwiper}
        >
            {contentSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className={style.containerSlider}>
                        <Slide                            
                            backgroundImage={slide.background}
                            title={slide.title}
                            subTitle={slide.subTitle}
                            decoratedText={slide.decoratedText}
                            description={slide.description}
                            button={slide.button}
                            variantContent={slide.variantContent}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider