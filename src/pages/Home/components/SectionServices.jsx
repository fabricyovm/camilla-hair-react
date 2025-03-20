import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaWhatsapp } from "react-icons/fa";
import Title from '../../../components/Title';
import openWhatsapp from '../../../utils/openWhatsapp';
import style from './SectionServices.module.css';

//CSS Swiper
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imagens
import Alinhamento from '../images/alinhamento.svg';
import Botox from '../images/botox.svg';
import Coloracao from '../images/coloracao.svg';
import Corte from '../images/corte.svg';
import Escova from '../images/escova.svg';
import Mechas from '../images/mechas.svg';
import Progressiva from '../images/progressiva.svg';
import Tratamento from '../images/tratamento.svg';
import AlinhamentoMobile from '../images/alinhamento-mobile.png';
import BotoxMobile from '../images/botox-mobile.png';
import ColoracaoMobile from '../images/coloracao-mobile.png';
import CorteMobile from '../images/corte-mobile.png';
import EscovaMobile from '../images/escova-mobile.png';
import MechasMobile from '../images/mechas-mobile.png';
import ProgressivaMobile from '../images/progressiva-mobile.png';
import TratamentoMobile from '../images/tratamento-mobile.png';

const SectionServices = () => {
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [delayAutoplay, setDelayAutoplay] = useState(3000)
    const styleSwiper = {
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#000',
        '--swiper-pagination-bottom': '0px',
        '--swiper-pagination-bullet-size': '12px',
        '--swiper-pagination-bullet-horizontal-gap': '8px',
    };
    const infoCard = [
        {
            id: 1,
            imgDesktop: Corte,
            imgMobile: CorteMobile,
            title: "CORTE"
        },
        {
            id: 2,
            imgDesktop: Tratamento,
            imgMobile: TratamentoMobile,
            title: "TRATAMENTO"
        },
        {
            id: 3,
            imgDesktop: Mechas,
            imgMobile: MechasMobile,
            title: "MECHAS"
        },
        {
            id: 4,
            imgDesktop: Coloracao,
            imgMobile: ColoracaoMobile,
            title: "COLORAÇAO"
        },
        {
            id: 5,
            imgDesktop: Alinhamento,
            imgMobile: AlinhamentoMobile,
            title: "ALINHAMENTO"
        },
        {
            id: 6,
            imgDesktop: Botox,
            imgMobile: BotoxMobile,
            title: "BOTOX"
        },
        {
            id: 7,
            imgDesktop: Escova,
            imgMobile: EscovaMobile,
            title: "ESCOVA"
        },
        {
            id: 8,
            imgDesktop: Progressiva,
            imgMobile: ProgressivaMobile,
            title: "PROGRESSIVA"
        },
    ];

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 480) {
                setSlidesPerView(2);
            } else {
                setDelayAutoplay(1500);
                setSlidesPerView(1);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        }


    }, []);


    return (
        <section className={style.services}>
            <div className={`container ${style.servicesContent}`}>
                <Title title="Serviços" fontSize='4rem' marginBottom='4rem' />
                <Swiper
                    style={{ ...styleSwiper }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    autoplay={{
                        delay: delayAutoplay,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    id={style.mySwiper}
                >
                    {infoCard.map(card => (
                        <SwiperSlide key={card.id}>
                            <div key={card.id} className={style.card}>
                                <img src={card.imgDesktop} className={style.imgDesktop} />
                                <img src={card.imgMobile} className={style.imgMobile} />
                                <p>{card.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={style.boxButtons}>
                    <button className={style.btnOpenWhatsapp} onClick={openWhatsapp}>
                        <FaWhatsapp className={style.btnIcon} />
                        <span>AGENDAR AGORA</span>
                    </button>
                    <Link to="/services">
                        <button className={style.btnMoreServices}>VER SERVIÇOS</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SectionServices