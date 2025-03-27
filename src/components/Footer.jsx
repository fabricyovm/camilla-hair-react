import Title from "./Title";
import style from './Footer.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaRegClock, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`container ${style.footerContent}`}>
                <div className={style.camilaSousa}>
                    <Title title="CAMILA SOUSA" fontSize="1.2rem" marginBottom="2rem" />
                    <p>
                        Com anos de experiência no mundo da beleza, sou uma cabeleireira profissional dedicada a transformar e realçar a beleza de cada cliente. Minha trajetória na profissão é marcada pela dedicação e pelo desejo de proporcionar resultados que superem as expectativas.
                    </p>
                    <p>
                        Minhas especialidades incluem cortes modernos, mechas, coloração e técnicas de química capilar.
                    </p>
                    <p>
                        Cada serviço é realizado com atenção aos detalhes e com os melhores produtos do mercado, garantindo a saúde e a beleza dos fios.
                    </p>

                    <div className={style.socialMedia}>
                        <a href="https://www.instagram.com/camilla.santoshair" target='_blank'>
                            <FaInstagram className={style.socialMediaIcon} />
                        </a>
                        <a href="https://wa.me/5551994082005" target='_blank'>
                            <FaWhatsapp className={style.socialMediaIcon} />
                        </a>
                    </div>
                </div>

                <div className={style.services}>
                    <Title title="SERVIÇOS" fontSize="1.2rem" marginBottom="2rem" />
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
                    <Title title="CONTATO" fontSize="1.2rem" marginBottom="2rem" />
                    <p>
                        <FaWhatsapp className={style.iconFooter} />
                        <span>(51) 99408-2005</span>
                    </p>
                    <p>
                        <FaPhoneAlt className={style.iconFooter} />
                        <span>(51) 99408-2005</span>
                    </p>
                    <p>
                        <FaLocationDot className={style.iconFooter} />
                        <span>R. Dr. Armando Barbedo, 526 - loja 01 - Tristeza, Porto Alegre</span>
                    </p>
                </div>

                <div className={style.serviceHours}>
                    <Title title="ATENDIMENTO" fontSize="1.2rem" marginBottom="2rem" />
                    <p>
                        <FaRegClock className={style.iconFooter} />
                        <span>De <b>terça-feira</b> a <b>sábado</b>, das <b>10h</b> às <b>19h</b></span>
                    </p>
                </div>
            </div>

            <div className={style.copyright}>
                <p>
                    © Camila Sousa, 2025 - Todos os direitos reservados. | <a href="https://fabricyomattivi.vercel.app" target="_blank">Desenvolvido por Fabricyo Vargas Mattivi.</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer