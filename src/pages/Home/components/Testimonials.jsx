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
            name: "Fabricyo Mattivi",
            infoClient: "Cliente e Namorado",
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi dolores, consequuntur ullam quibusdam earum vel harum rem deserunt. Aut inventore quo laudantium, alias odit velit quis neque. Veniam, quas?"
        },
        {
            id: 2,
            avatar: "",
            name: "Adriana Vargas",
            infoClient: "Cliente e Sogra",
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi dolores, consequuntur ullam quibusdam earum vel harum rem deserunt. Aut inventore quo laudantium, alias odit velit quis neque. Veniam, quas?"
        },
        {
            id: 3,
            avatar: "",
            name: "Susi Ribas",
            infoClient: "Cliente e Influencer Digital",
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi dolores, consequuntur ullam quibusdam earum vel harum rem deserunt. Aut inventore quo laudantium, alias odit velit quis neque. Veniam, quas?"
        },
        {
            id: 4,
            avatar: "",
            name: "Maria Da Rosa",
            infoClient: "Cliente",
            testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi dolores, consequuntur ullam quibusdam earum vel harum rem deserunt. Aut inventore quo laudantium, alias odit velit quis neque. Veniam, quas?"
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