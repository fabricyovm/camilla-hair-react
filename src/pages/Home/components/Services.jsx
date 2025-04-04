import Title from '../../../components/Title';
import style from './Services.module.css';
import Corte from '../../../assets/service1.jpg';
import Mechas from '../../../assets/service2.jpg';
import Coloracao from '../../../assets/service3.jpg';
import Escova from '../../../assets/service4.jpg';
import Progressiva from '../../../assets/service5.jpg';

const Services = () => {
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
                {/* <Title title="Serviços" fontSize='4rem' marginBottom='4rem' /> */}
                <Title title="Serviços" variant='sectionLeft' />
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

export default Services