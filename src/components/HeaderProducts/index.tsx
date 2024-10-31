import './style.css'
import { NavLink } from "react-router-dom";

function HeaderProducts() {
  return (
    <header className="header-products">
      <NavLink
        to={"computers"}
        className={({ isActive }) =>
          isActive ? "link-active link link-product" : "link-product link"
        }
      >
        Computadores
      </NavLink>
      <NavLink
        to={"eletronics"}
        className={({ isActive }) =>
          isActive ? "link-active link link-product" : "link-product link"
        }
      >
        Eletrônicos
      </NavLink>
      <NavLink
        to={"books"}
        className={({ isActive }) =>
          isActive ? "link-active link link-product" : "link-product link"
        }
      >
        Livros
      </NavLink>
    </header>
  );
}

export default HeaderProducts;
