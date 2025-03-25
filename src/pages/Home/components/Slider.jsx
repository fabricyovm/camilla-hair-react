import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from '../../../components/Button'
import openWhatsapp from '../../../utils/openWhatsapp';
import Slide from './Slide';
import style from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroBackground from '../images/hero-background.jpg'
import HeroBackgroundMobile from '../images/hero-background-mobile.jpg'
import BannerDesktop3 from '../images/banner-desktop3.jpg'
import BannerMobile3 from '../images/banner-mobile3.jpg'

const Slider = () => {
    const [isBannerMobile, setIsBannerMobile] = useState(false)

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth <= 480) {
                setIsBannerMobile(true)
            }
            else {
                setIsBannerMobile(false)
            }
        }

        handleSize()

        window.addEventListener('resize', handleSize)

        return () => window.removeEventListener('resize', handleSize)
    }, [])

    const contentSlides = [
        {
            id: 1,
            background: isBannerMobile ? HeroBackgroundMobile : HeroBackground,
            title: "HAIR STYLIST",
            subTitle: "SEU CABELO NAS MÃOS DE QUEM ENTENDE",
            decoratedText: "Camilla Sousa",
            description: "Agende seu horário agora e tenha uma experiência única de cuidados para o seu cabelo.",
            button: <Button text="Agendar agora" variant='hero' action={openWhatsapp} />,
        },
        {
            id: 2,
            background: isBannerMobile ? BannerMobile3 : BannerDesktop3,
            title: "PREMIUM",
            subTitle: "UTILIZAMOS OS MELHORES PRODUTOS DO MERCADO",
            decoratedText: "Produtos",
            description: "Priorizamos a qualidade e os melhores resultados para os seus cabelos. Por isso, trabalhamos exclusivamente com as marcas mais renomadas do mercado: Joico, Wella e Truss. Confie no cuidado que você merece!",
            variantContent: "left"
        },
    ]

    return (
        <Swiper            
            modules={[Navigation, Pagination, Autoplay]}            
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