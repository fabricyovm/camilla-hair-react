import style from './ButtonWhatsapp.module.css';
import { FaWhatsapp } from "react-icons/fa";

const ButtonWhatsapp = ({ text, action, position }) => {
    
    const btnPosition = position ? position : "left";

    const handleAction = () => {
        action();
    }

    return (
        <div className={`${style.btnOpenWhatsapp} ${style[btnPosition]}`}>
            <button onClick={handleAction}>
                <FaWhatsapp className={style.btnIcon} />
                {text}
            </button>
        </div>
    )
}

export default ButtonWhatsapp