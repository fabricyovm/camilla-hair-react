import style from './ContactInfoItem.module.css';

const ContactInfoItem = ({ icon, title, text }) => {   

  return (
    <li className={style.contactInfo}>
        <div className={style.iconContact}>{icon}</div>
        <div className={style.textContactInfo}>
            <span>{title}</span>
            <span>{text}</span>
        </div>
    </li>
  )
}

export default ContactInfoItem