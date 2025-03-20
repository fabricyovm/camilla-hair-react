import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo'
import style from './Header.module.css';

const Header = () => {
    const { pathname } = useLocation();
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

    return (
        <header className={style.header}>
            <div className={`container ${style.headerContent}`}>
                <Link to="/">
                    <Logo />
                </Link>
                <nav className={style.nav}>
                    <ul className={style.navList}>
                        {navElements.map(element => (
                            <li key={element.path} className={style.itemList}>
                                <Link to={element.path} className={`${style.linkList} ${isActivePage(element.path)}`}>
                                    {element.pageName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header