import { Link } from 'react-router-dom';
import style from './Blog.module.css';

// Imagens
import TesteDeMechas from '../../../assets/testeDeMecha_blog.svg';
import Corte from '../../../assets/corte_blog.svg';
import Erros from '../../../assets/erros_blog.svg';

const Blog = () => {

    const infoCards = [
        {
            id: 1,
            img: TesteDeMechas,
            title: "TESTE DE MECHA: Porque ele é fundamental",
            description: "O teste de mecha é essencial antes de qualquer procedimento químico. Ele ajuda a identificar reações indesejadas e garante que o cabelo esteja preparado para a transformação, evitando danos e garantindo o melhor resultado!"
        },
        {
            id: 2,
            img: Corte,
            title: "CORTE: Cortar o cabelo não é apenas estética",
            description: "Cortar o cabelo vai além de manter o visual bonito. Esse hábito regular ajuda a manter os fios mais fortes, saudáveis e livres de pontas duplas. Além disso, um bom corte valoriza o rosto, eleva a autoestima e faz parte do autocuidado!"


        },
        {
            id: 3,
            img: Erros,
            title: "Não cometa esses erros ao cuidar do seu cabelo",
            description: "Você sabia que alguns hábitos comuns podem estar prejudicando a saúde dos seus fios? Conheça os principais erros na hora de cuidar do cabelo e descubra como evitá-los para ter fios mais fortes, bonitos e saudáveis!"
        }
    ];

    return (
        <section className={style.blog}>
            <div className={`container ${style.blogContent}`}>
                {infoCards.map((item) => (
                    <div key={item.id} className={style.cardBlog}>
                        <img src={item.img} />
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <div className={style.boxLearnMore}>
                                <Link to="/blog/teste-de-mecha" className={style.learnMore}>Saber mais</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog