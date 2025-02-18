import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import style from './Layout.module.css';

const Layout = () => {
    return (
        <div className={style.mainContainer}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout