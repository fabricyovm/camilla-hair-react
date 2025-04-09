import { Link } from 'react-router-dom'
import style from './Logo.module.css'

const Logo = ({ variant = "header" }) => {
    return (
        <div className={style.containerLogo}>
            <Link to="/" className={style.linkLogo}>
                <h1 className={`${style.logoTitle} ${style[variant]}`}>
                    Camilla Sousa
                </h1>
            </Link>
        </div>
    )
}

export default Logo