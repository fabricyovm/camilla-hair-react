import { Link } from 'react-router-dom';
import style from './MenuDesktop.module.css';

const MenuDesktop = () => {
    return (
        <nav className={style.nav}>            
            <ul>
                <li><Link to="/">INÍCIO</Link></li>
                <li><Link to="/services">SERVIÇOS</Link></li>
                <li><Link to="/products">PRODUTOS</Link></li>
                <li><Link to="/contact">CONTATO</Link></li>
            </ul>
        </nav>
    )
}

export default MenuDesktop