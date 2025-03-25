import style from './Logo.module.css'

const Logo = ({ variant = "header" }) => {
    return (
        <h1 className={`${style.logoTitle} ${style[variant]}`}>
            Camilla Sousa
        </h1>
    )
}

export default Logo