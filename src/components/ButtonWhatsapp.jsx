import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import style from './ButtonWhatsapp.module.css';

const ButtonWhatsapp = ({ text, action, position }) => {
    
    const btnPosition = position ? position : "left";

    const handleAction = () => {
        action();
    }

    return (
        <div className={`${style.btnOpenWhatsapp} ${style[btnPosition]}`}>
            <button onClick={handleAction}>
                <FontAwesomeIcon icon={faWhatsapp} className={style.btnIcon} />
                {text}
            </button>
        </div>
    )
}

export default ButtonWhatsapp