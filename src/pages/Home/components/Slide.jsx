import style from './Slide.module.css'
import openWhatsapp from '../../../utils/openWhatsapp';

const Slide = ({
    backgroundImage,
    title,
    subTitle,
    decoratedText,
    description,
    button,
    variantContent = "center"
}) => {
    return (
        <>
            <img src={backgroundImage} className={style.backgroundImage} />
            <div className={style.containerTextBanner}>
                <div className={`container ${style.slideContent}`}>
                    <div className={`${style.boxBanner} ${style[variantContent]}`}>
                        {decoratedText && <p className={style.decoratedText}>{decoratedText}</p>}
                        {title && <p className={style.titleBanner}>{title}</p>}
                        {subTitle && <p className={style.subTitleBanner}>{subTitle}</p>}
                        {description && <p className={style.description}>{description}</p>}
                        {button}
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Slide