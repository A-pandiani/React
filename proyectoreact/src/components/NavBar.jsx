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
    <li className="navBar__item"><a className="navBar__link" href="#">Series</a></li>
    <li className="navBar__item"><a className="navBar__link" href="#">Peliculas</a></li>
    <li className="navBar__item"><a className="navBar__link" href="#">Estrenos</a></li>
    <li className="navBar__item"><a className="navBar__link" href="#">Carrito</a></li>
</ul>
 <CartWidget/>
 
    </nav>
    
</header>







    )




}

export default NavBar;