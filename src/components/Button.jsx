import { useState } from 'react'
import style from './Button.module.css'

const Button = ({
    text, 
    variant = 'primary', 
    icon,
    action
}) => {  

    return (
        <button
            className={`${style.defaultButton} ${style[variant]}`}
            onClick={action}
        >
            {icon && <span className={style.btnIcon}>{icon}</span>}
            {text}
        </button>
    )
}

export default Button