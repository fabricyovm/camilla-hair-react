import style from './HamburguerMenu.module.css'

const HamburguerMenu = ({ action }) => {

    function handleAction() {
        action();
    }

  return (
    <div className={style.hamburguerMenu} onClick={() => handleAction()}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default HamburguerMenu