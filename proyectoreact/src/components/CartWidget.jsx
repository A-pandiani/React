import { Link } from "react-router-dom";
import "./../components/CartWidget.css";
/* import img from '../imagenes/carrito.png'; */

 

/* const CartWidget = () =>{
    return(
        <>
        <img src={ img }  className= 'carrito' alt='imagen'  />
     
        
        </>
    )
} */
export default function CartWidget() {
    return (
        <Link to='/cart'>
            <div className='cartWidget'>
                <span className="cartWidget__icon"><i class="bi bi-bag"></i></span>
                <span className="cartWidget__counter">0</span>
            </div>
        </Link>
    );
}

