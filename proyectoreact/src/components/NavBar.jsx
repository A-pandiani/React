import { Link } from "react-router-dom";
import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
const NavBar =() => {
return (
<header className="header">
    <h1 className="header__titulo">PlayKira's</h1>
    <a className="header__logo" href="#">
        <img className=" header__img" src="./logo192.png" alt=""></img>
    </a>
    <nav className="navBar">
<ul className="navBar__list">
<Link to='/category/Series' style={{ textDecoration: 'none' }}>
    <li className="navBar__item"><a className="navBar__link" href="#">Series</a></li>
</Link>
<Link to='/category/Peliculas' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Peliculas</li>
                    </Link>
                    <Link to='/category/Estrenos' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Estrenos</li>
                    </Link>

    <li className="navBar__item"><a className="navBar__link" href="#">Carrito</a></li>

</ul>
 <CartWidget/>
 
    </nav>
    
</header>







    )




}

export default NavBar;