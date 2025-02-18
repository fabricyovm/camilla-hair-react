import Title from "./Title";
import style from './Footer.module.css'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.container}>
            <div className={style.camilaSousa}>
            <Title title="CAMILA SOUSA" titleClassName="titleFooter" /> 
                <p>Com cinco anos de experiência no mundo da beleza, sou uma cabeleireira profissional dedicada a transformar e realçar a beleza de cada cliente. Minha trajetória na profissão é marcada pela dedicação e pelo desejo de proporcionar resultados que superem as expectativas.</p>
                <p>Minhas especialidades incluem cortes modernos, mechas, coloração e técnicas de química capilar.</p>
                <p>Cada serviço é realizado com atenção aos detalhes e com os melhores produtos do mercado, garantindo a saúde e a beleza dos fios.</p>
                
                <div className={style.socialMedia}>
                    <a href="https://www.instagram.com/camilla.santoshair" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} className={style.socialMediaIcon} />
                    </a>
                    <a href="https://wa.me/5551994082005" target='_blank'>
                        <FontAwesomeIcon icon={faWhatsapp} className={style.socialMediaIcon} />
                    </a>                    
                </div>
            </div>

            <div className={style.services}>
                <Title title="SERVIÇOS" titleClassName="titleFooter" />       
                <p>Corte</p>
                <p>Mechas</p>
                <p>Luzes</p>
                <p>Escova</p>
                <p>Coloração</p>
                <p>Selagem</p>
                <p>Botox</p>
                <p>Tratamento</p>
                <p>Progressiva</p>
                <p>Alinhamento Capilar</p>
            </div>

            <div className={style.contact}>
                <Title title="CONTATO" titleClassName="titleFooter" />                 
                <p>
                    <FontAwesomeIcon icon={faWhatsapp} className={style.whatsapp} />
                    <span>(51) 99408-2005</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} className={style.phone} />
                    <span>(51) 99408-2005</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} className={style.phone} />
                    <span>R. Dr. Armando Barbedo, 526 - loja 01 - Tristeza, Porto Alegre</span>
                </p>
            </div>

            <div className={style.serviceHours}>
                <Title title="ATENDIMENTO" titleClassName="titleFooter" /> 
                <p>
                    <FontAwesomeIcon icon={faClock} className={style.watch} />
                    <span>De <b>terça-feira</b> a <b>sábado</b>, das <b>10h</b> às <b>19h</b></span>
                </p>
            </div>
        </div>

        <div className={style.copyright}>
            <p>
                © Camila Sousa, 2024 - Todos os direitos reservados. | <a href="https://portfolio-fabricyo-mattivi.vercel.app" target="_blank">Desenvolvido por Fabricyo Vargas Mattivi.</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer