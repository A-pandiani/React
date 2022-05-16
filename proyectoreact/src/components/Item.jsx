
import ItemCount from "./ItemCount";
import './Item.css';

/* export default function Item({name, price, img,}) {

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
} */
export default function Item({el}) {

    return (
        <div className="item">
            <img className="item__img" src={el.img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <p className='item__category'>{el.categoria}</p>
                <h3 className="item__title">{el.name}</h3>
                <p className='item__price'>{`Precio: $${el.price}`}</p>
                <ItemCount id={el.id} initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/>
            </div>
        </div>
    );
}