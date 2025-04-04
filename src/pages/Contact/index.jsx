import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaRegClock, FaPhoneAlt, FaUser, FaInstagram } from "react-icons/fa";
import ToTop from '../../components/ToTop'
import ContactInfoItem from './components/ContactInfoItem';
import Maps from './components/Maps'
import style from './index.module.css';
import openWhatsapp from '../../utils/openWhatsapp';
import Button from '../../components/Button';
import Title from "../../components/Title";


const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "(51) 99408-2005"
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Telefone",
      text: "(51) 99408-2005"
    },
    {
      id: 3,
      icon: <FaRegClock />,
      title: "Atendimento",
      text: "Terça-feira a sábado, das 10h às 19h"
    },
    {
      id: 4,
      icon: <FaLocationDot />,
      title: "Endereço",
      text: "R. Dr. Armando Barbedo, 526 - loja 01 - Tristeza, Porto Alegre"
    },
  ];

  return (
    <section className={style.contact}>
      <div className="container">
        <Title title="Contato" />
      </div>
      <div className={`container ${style.contactContent}`}>
        <div className={style.boxLeftSide}>
          {/* <Title title="CONTATO"  marginBottom="2rem" /> */}          
          <ul className={style.listContact}>
            {contactInfo.map((item) => (
              <ContactInfoItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </ul>
        </div>
        <div className={style.boxRightSide}>
          <div className={style.aboutContent}>
            <div className={style.tempProfilePicture}>
              <FaUser className={style.tempIconProfilePicture} />
            </div>
            <h1 className={style.professionalName}>Camila Sousa</h1>
            <p className={style.specialtiesText}>
              Especialista em mechas, coloração, corte e química capilar
            </p>
            <a className={style.instagram} href="https://www.instagram.com/camilla.santoshair" target="_blank">
              <div className={style.instagramContent}>
                <FaInstagram className={style.iconInstagram} />
                <span>camillasantos.hair</span>
              </div>
            </a>           
          </div>
        </div>        
      </div>
      <Maps />
      <ToTop />
    </section>
  )
}

export default Contact