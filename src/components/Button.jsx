import { useState } from 'react'
import style from './Button.module.css'

const Button = ({
    icon,
    text,
    action,
    color = "#fff",
    bg = "#b49759",
    marginTop = '0rem',
    marginBottom = '0rem',
    marginLeft = '0rem',
    marginRight = '0rem',
    colorHover = '#fff',
}) => {
    const [isHover, setIsHover] = useState(false)       
    const btnStyle = {
        color: isHover ? colorHover : color,
        backgroundColor: isHover ? 'transparent' : bg,
        border: `2px solid ${bg}`,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
    }

    return (
        <button
            className={style.defaultButton}
            onClick={action}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={btnStyle}
        >
            {icon && <span className={style.btnIcon}>{icon}</span>}
            {text}
        </button>
    )
}

export default Button