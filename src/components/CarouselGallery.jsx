import style from './CarouselGallery.module.css';

// Teste
import HairTeste1 from '../assets/hair_teste1.png'
import HairTeste2 from '../assets/hair_teste2.png'
import HairTeste3 from '../assets/hair_teste3.png'
import HairTeste4 from '../assets/hair_teste4.png'
import HairTeste5 from '../assets/hair_teste5.png'
import HairTeste6 from '../assets/hair_teste6.png'
import HairTeste7 from '../assets/hair_teste7.png'

const CarouselGallery = () => {
    return (
        <div className={style.containerCarousel}>
            <div className={style.slideTrack}>
                <img src={HairTeste1} alt='Cabelo' />
                <img src={HairTeste2} alt='Cabelo' />
                <img src={HairTeste3} alt='Cabelo' />
                <img src={HairTeste4} alt='Cabelo' />
                <img src={HairTeste5} alt='Cabelo' />
                <img src={HairTeste6} alt='Cabelo' />
                <img src={HairTeste7} alt='Cabelo' />
            </div>
            <div className={style.slideTrack}>
                <img src={HairTeste1} alt='Cabelo' />
                <img src={HairTeste2} alt='Cabelo' />
                <img src={HairTeste3} alt='Cabelo' />
                <img src={HairTeste4} alt='Cabelo' />
                <img src={HairTeste5} alt='Cabelo' />
                <img src={HairTeste6} alt='Cabelo' />
                <img src={HairTeste7} alt='Cabelo' />
            </div>
        </div>
    )
}

export default CarouselGallery