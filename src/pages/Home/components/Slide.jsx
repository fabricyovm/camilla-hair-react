import style from './Slide.module.css'

const Slide = ({
    backgroundImage,
    title,
    subTitle,
    decoratedText,
    description,
    button,
    altText = "Camilla Sousa, Hair Stylist. Agende seu horário.",
    variant = "textCenter"
}) => {
    return (
        <div className={style.containerSlide}>
            <img src={backgroundImage} className={style.backgroundImage} alt={altText} />
            <div className={style.containerContent}>
                <div className={`container ${style.textContent} ${style[variant]}`}>
                    <div className={style.boxText}>
                        {decoratedText && <p className={style.decoratedText}>{decoratedText}</p>}
                        {title && <p className={style.titleBanner}>{title}</p>}
                        {subTitle && <p className={style.subTitleBanner}>{subTitle}</p>}
                        {description && <p className={style.description}>{description}</p>}
                        {button}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide