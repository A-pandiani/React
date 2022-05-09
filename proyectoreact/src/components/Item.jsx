import itemImg from '../imagenes/DrStrange.jpg';
import ItemCount from "./ItemCount";
import './Item.css';

export default function Item({name, price, img,}) {

    return (
        <div className="item">
            <img className="item__img" src={itemImg} alt="" />
            <div className="item__filtro"></div>
            <div className='item__informacion'>
                <h3 className="item__titulo">{name}</h3>
                <p className='item__price'>{`Precio: $${price}`}</p>
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/>
            </div>
        </div>
    );
}