import style from './Differentials.module.css';

const Differentials = () => {

    const infoCards = [
        {
            id: 1,
            title: "MELHORES PRODUTOS DO MERCADO",
            desc: "Trabalho com os melhores produtos do mercado, incluindo marcas renomadas como Joico, Wella e Truss, para garantir resultados excepcionais. Cada escolha é feita com o intuito de oferecer a máxima qualidade e transformar o seu visual de forma única e impecável.",
        },
        {
            id: 2,
            title: "ATENDIMENTO EXCLUSIVO E DE QUALIDADE",
            desc: "Atendimento totalmente personalizado, com foco em entender a necessidade de cada cliente. Meu objetivo é criar o visual perfeito para você, garantindo que cada detalhe seja cuidadosamente planejado para refletir sua personalidade e estilo, sempre com qualidade e excelência.",
        },
        {
            id: 3,
            title: "TÉCNICAS MODERNAS E MÉTODOS ATUALIZADOS",
            desc: "Trabalho com técnicas modernas, utilizando métodos atualizados para proporcionar resultados incríveis. Com um olhar atento às últimas tendências e a melhor tecnologia, personalizo cada serviço para atender às suas necessidades e garantir um visual impecável.",
        },
    ];

    return (
        <section className={style.differentials}>
            <div className={`container ${style.differentialsContent}`}>
                {infoCards.map(card => (
                    <div key={card.id} className={style.card}>
                        <h2>{card.title}</h2>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Differentials