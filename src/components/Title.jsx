import style from './Title.module.css';

const Title = ({ 
  title, 
  fontSize = '1.5rem', 
  color = '#b49759',
  marginBottom = '0',
 }) => {

  const titleStyle = {
      color,
      fontSize,
      marginBottom,
  }

  return (
      <h1 className={style.title} style={titleStyle}>
        {title}
      </h1>
  )
}

export default Title