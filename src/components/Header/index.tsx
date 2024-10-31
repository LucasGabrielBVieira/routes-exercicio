import './style.css';
import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home-img.svg";
import { Link } from 'react-router-dom';

function Header() {

    return(
        <header className='header-home'>
            <div className="container header-container">
                <nav>
                    <NavLink to={"/home"} className={({ isActive }) => isActive ? "link-active link link-nav" : "link-nav link"}>
                        Início
                    </NavLink>
                    <NavLink to={"/products"} className={({ isActive }) => isActive ? "link-active link link-nav" : "link-nav link"}>
                        Produtos
                    </NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => isActive ? "link-active link link-nav" : "link-nav link"}>
                        Sobre Nós
                    </NavLink>
                </nav>
                <Link to={"/home"}>
                    <img src={homeImg} alt="Início" />
                </Link>
            </div>
        </header>
    );

}

export default Header