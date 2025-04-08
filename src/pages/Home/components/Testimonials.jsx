import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaStar, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Title from '../../../components/Title';
import style from './Testimonials.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
    const [slidesPerView, setSlidesPerView] = useState(2)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const testimonialsContent = [
        {
            id: 1,
            avatar: "",
            name: "Renata Lima",
            infoClient: "Cliente",
            testimonial: "Sempre tive receio de mudar o corte, mas ela me passou tanta confiança que resolvi tentar... e amei! O atendimento é super acolhedor, ela escuta com atenção e dá sugestões que combinam com nosso estilo. Saí me sentindo renovada. Recomendo demais!"
        },
        {
            id: 2,
            avatar: "",
            name: "Juliana Mello",
            infoClient: "Cliente",
            testimonial: "Fiz uma hidratação profunda e escova, e meu cabelo nunca ficou tão leve e brilhoso. O ambiente é super calmo, organizado e confortável. Dá pra perceber que tudo é feito com muito amor. Com certeza virei cliente fiel!"
        },
        {
            id: 3,
            avatar: "",
            name: "Susi Ribas",
            infoClient: "Cliente e Influencer Digital",
            testimonial: "Fui indicada por uma amiga e agora sou eu quem indica! O atendimento é diferenciado, ela entende o que você quer e ainda propõe melhorias com muito bom gosto. Meu cabelo ficou incrível, e ainda saí mais leve de tanto que a conversa foi boa."
        },
        {
            id: 4,
            avatar: "",
            name: "Bianca Ferreira",
            infoClient: "Cliente",
            testimonial: "O serviço é de alta qualidade, mas o diferencial está no cuidado humano. Ela te trata como única, sem pressa, com muito profissionalismo e carinho. O resultado fala por si: um cabelo lindo e uma cliente feliz."
        },
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSlidesPerView(1)
            }
            else {
                setSlidesPerView(2)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleSlideChange = (swiper) => {
        if (swiper.isBeginning) {
            setIsBeginning(true)
        }
        else {
            setIsBeginning(false)
        }
        
        if (swiper.isEnd) {
            setIsEnd(true)
        }
        else {
            setIsEnd(false)
        }
    }

    return (
        <section className={style.testimonials}>
            <div className="container">
                {/* <Title title="Depoimentos" fontSize='4rem' marginBottom='4rem' /> */}
                <Title title="Depoimentos" variant='sectionLeft' />
                <Swiper
                    className={style.swiperTestimonials}
                    modules={[Navigation, Pagination, Autoplay]}                    
                    slidesPerView={slidesPerView}
                    spaceBetween={50}     
                    autoplay               
                    onSlideChange={handleSlideChange}
                    navigation={{
                        nextEl: `.${style.btnNext}`,
                        prevEl: `.${style.btnPrev}`,
                    }}                    
                >
                    {testimonialsContent.map(testimonial => (
                        <SwiperSlide key={testimonial.id}>
                            <div className={style.testimonialsBox}>
                                <div className={style.client}>
                                    <div className={style.infoClient}>
                                        <h3 className={style.nameClient}>{testimonial.name}</h3>
                                        <span>{testimonial.infoClient}</span>
                                    </div>
                                </div>
                                <div className={style.stars}>
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                    <FaStar className={style.starIcon} />
                                </div>
                                <p className={style.text}>
                                    {testimonial.testimonial}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={style.navigationButtons}>
                    <button className={`${style.btnPrev} ${isBeginning ? style.transparent : ""}`} aria-label="próximo depoimento"><FaArrowCircleLeft /></button>
                    <button className={`${style.btnNext} ${isEnd ? style.transparent : ""}`} aria-label="depoimento anterior"><FaArrowCircleRight /></button>
                </div>
            </div>
        </section >
    )
}

export default Testimonials