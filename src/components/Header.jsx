import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaPhone, FaImages } from "react-icons/fa"
import { MdContentCut } from "react-icons/md"
import Logo from '../components/Logo'
import style from './Header.module.css'

const Header = () => {
    const { pathname } = useLocation();
    const [isMenuMobile, setIsMenuMobile] = useState(false)
    const navElements = [
        {
            path: '/',
            pageName: 'Início',
            iconmobile: <FaHome className={style.iconMobile} />,
        },
        {
            path: '/services',
            pageName: 'Serviços',
            iconmobile: <MdContentCut className={style.iconMobile} />,
        },
        {
            path: '/products',
            pageName: 'Produtos',
            iconmobile: <FaImages className={style.iconMobile} />,
        },
        {
            path: '/contact',
            pageName: 'Contato',
            iconmobile: <FaPhone className={style.iconMobile} />,
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
                        {navElements.map(element => (
                            <li key={element.path} className={style.itemList} onClick={toggleMenu}>
                                <Link to={element.path} className={`${style.linkList} ${isActivePage(element.path)}`}>
                                    {element.iconmobile}
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