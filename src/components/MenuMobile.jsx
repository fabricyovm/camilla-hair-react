import { Link } from 'react-router-dom';
import HamburguerMenu from './HamburguerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHandHoldingHeart, faPhoneFlip, faPumpSoap } from '@fortawesome/free-solid-svg-icons'
import style from './MenuMobile.module.css';
import { useState } from 'react';

const MenuMobile = () => {

    const [active, setActive] = useState(false)

    const openMenu = () => {
        setActive(!active)
    }

    return (
        <nav className={style.nav}>
            <HamburguerMenu action={openMenu} />
            <div className={`${style.menuList} ${active ? style.active : ""}`}>                         
                <ul>          
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} className={style.icon} />
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className={style.icon} />
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <FontAwesomeIcon icon={faPumpSoap} className={style.icon} />
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <FontAwesomeIcon icon={faPhoneFlip} className={style.icon} />
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuMobile