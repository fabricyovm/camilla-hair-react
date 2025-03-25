import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import Logo from '../components/Logo'
import style from './Header.module.css';

const Header = () => {
    const { pathname } = useLocation();
    const [isMenuMobile, setIsMenuMobile] = useState(false)
    const navElements = [
        {
            path: '/',
            pageName: 'Home'
        },
        {
            path: '/services',
            pageName: 'Serviços'
        },
        {
            path: '/products',
            pageName: 'Produtos'
        },
        {
            path: '/contact',
            pageName: 'Contato'
        },
    ]

    const isActivePage = (path) => (pathname === path ? style.activePage : "")

    const toggleMenu = () => {
        setIsMenuMobile(!isMenuMobile)
    }

    return (
        <header className={style.header}>
            <div className={`container ${style.headerContent}`}>
                <Link to="/">
                    <Logo variant='header' />
                </Link>
                <nav className={`${style.nav} ${isMenuMobile ? style['active'] : ''}`}>
                    <ul className={style.navList}>
                        <li className={`${style.closeMenuMobile}`} onClick={toggleMenu}>
                            <button className={style.btnCloseMenuMobile}>
                                <IoClose />
                            </button>
                        </li>
                        {navElements.map(element => (
                            <li key={element.path} className={style.itemList} onClick={toggleMenu}>
                                <Link to={element.path} className={`${style.linkList} ${isActivePage(element.path)}`}>
                                    {element.pageName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={style.menuMobile} onClick={toggleMenu}>
                        <span className={style.line1}></span>
                        <span className={style.line2}></span>
                        <span className={style.line3}></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header