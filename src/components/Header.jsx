import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import Logo from './Logo';

const Header = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1000);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)

    }, []);

    return (
        <header className={style.header}>
            <div className={style.headerContent}>
                <Link to="/">
                    <Logo color="#fff" />                    
                </Link>
                {isDesktop ? <MenuDesktop /> : <MenuMobile />}
            </div>
        </header>
    )
}

export default Header