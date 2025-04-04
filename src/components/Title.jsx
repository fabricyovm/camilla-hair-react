import style from './Title.module.css'

const Title = ({ 
  title, 
  variant = "sectionLeft"
}) => {
  return (
    <div className={`${style.boxTitle} ${style[variant]}`}>
        <h1 className={style.title}>{title}</h1>
    </div>
  )
}

export default Title