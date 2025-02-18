import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TesteDeMecha from './pages/Blog/TesteDeMecha';


function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/blog/teste-de-mecha" element={<TesteDeMecha />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;