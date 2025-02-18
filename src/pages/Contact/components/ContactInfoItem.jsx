import style from './ContactInfoItem.module.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactInfoItem = ({ icon, title, text }) => {   

  return (
    <li className={style.contactInfo}>
        <FontAwesomeIcon icon={icon} className={style.iconContact} />
        <div>
            <span>{title}</span>
            <span>{text}</span>
        </div>
    </li>
  )
}

export default ContactInfoItem