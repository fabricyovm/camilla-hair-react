import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { FaHandHoldingHeart, FaPumpSoap, FaPhoneAlt } from "react-icons/fa";
import HamburguerMenu from './HamburguerMenu';
import style from './MenuMobile.module.css';

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
                            <FaHouse className={style.icon} />
                            <span>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <FaHandHoldingHeart className={style.icon} />
                            <span>Serviços</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <FaPumpSoap  className={style.icon} />
                            <span>Produtos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <FaPhoneAlt className={style.icon} />
                            <span>Contato</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuMobile