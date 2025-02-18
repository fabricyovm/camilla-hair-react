import ContactInfoItem from './components/ContactInfoItem';
import style from './index.module.css';
import ProfilePicture from '../../assets/profile-picture.jpeg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import openWhatsapp from '../../utils/openWhatsapp';

// Font Awesome
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ButtonWhatsapp from '../../components/ButtonWhatsapp';

const Contact = () => {
    const contactInfo = [
      {
        id: 1,
        icon: faWhatsapp,
        title: "WhatsApp",
        text: "(51) 99408-2005"
      },
      {
        id: 2,
        icon: faSquarePhone,
        title: "Telefone",
        text: "(51) 99408-2005"
      },
      {
        id: 3,
        icon: faClock,
        title: "Atendimento",
        text: "Terça-feira a sábado, das 10h às 19h"
      },
      {
        id: 4,
        icon: faLocationDot,
        title: "Endereço",
        text: "R. Dr. Armando Barbedo, 526 - loja 01 - Tristeza, Porto Alegre"
      },
    ];

  return (
    <>
      <div className={style.container}>        
        <div className={style.boxContact}>
          <h1>Contato</h1>
          <ul>
            {contactInfo.map((item) => (
              <ContactInfoItem 
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </ul>    
          <ButtonWhatsapp text="Agendar agora" action={openWhatsapp} position="center" />
        </div>

        <div className={style.boxAbout}>
            <div className={style.aboutContent}>
                <img src={ProfilePicture} alt="Foto da profissional Camila Sousa" />
                <h1>Camila Sousa</h1>
                <p className={style.specialtiesText}>Especialista em mechas, coloração, corte e química capilar</p>
                <a href="https://www.instagram.com/camilla.santoshair" target="_blank">              
                  <div className={style.mediaSocial}>
                    <div className={style.boxIcon}>
                      <img src={InstagramIcon} alt="Ícone do instagram" />
                    </div>
                    <p>Siga-me no instagram</p>
                    <p className={style.instagram}>@camilla.santoshair</p>
                  </div> 
                </a>               
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact