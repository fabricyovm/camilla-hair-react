import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaWhatsapp } from "react-icons/fa";
import Title from '../../../components/Title';
import openWhatsapp from '../../../utils/openWhatsapp';
import style from './SectionServices.module.css';

// Imagens
import Corte from '../../../assets/service1.jpg';
import Mechas from '../../../assets/service2.jpg';
import Coloracao from '../../../assets/service3.jpg';
import Escova from '../../../assets/service4.jpg';
import Progressiva from '../../../assets/service5.jpg';
import Alinhamento from '../../../assets/service6.jpg';
import Botox from '../../../assets/service7.jpg';
import Tratamento from '../../../assets/service8.jpg';
import Luzes from '../../../assets/service9.jpg';
import Selagem from '../../../assets/service10.jpg';

const SectionServices = () => {
    const contentCard = [
        {
            id: 1,
            img: Corte,
            name: "CORTE FEMININO, ESCOVA E LAVADO"
        },
        {
            id: 2,
            img: Mechas,
            name: "MECHAS E COLORAÇÃO"
        },
        {
            id: 3,
            img: Coloracao,
            name: "PROGRESSIVA E ALINHAMENTO"
        },
        {
            id: 4,
            img: Escova,
            name: "BOTOX E TRATAMENTO"
        },
        {
            id: 5,
            img: Progressiva,
            name: "LUZES E SELAGEM"
        },
    ];

    return (
        <section className={style.services}>
            <div className={`container ${style.servicesContent}`}>
                <Title title="Serviços" fontSize='4rem' marginBottom='4rem' />
                <div className={style.servicesBox}>
                    {contentCard.map((card) => (
                        <div className={style.serviceCard} key={card.id}>
                            <img src={card.img} alt={card.name} />
                            <p>{card.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionServices