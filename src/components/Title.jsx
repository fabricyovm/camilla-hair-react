import style from './Title.module.css';

const Title = ({ title, titleClassName }) => {
  return (
    <div className={style[titleClassName]}>
        <h1>{title}</h1>
    </div>
  )
}

export default Title