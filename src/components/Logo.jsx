import style from './Logo.module.css'

const Logo = ({ variant = "header" }) => {
    return (
        <div className={style.teste}>
            <h1 className={`${style.logoTitle} ${style[variant]}`}>
                Camilla Sousa
            </h1>
        </div>
    )
}

export default Logo