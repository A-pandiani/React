import Item from "./Item";
import './ItemList.css';

/* export default function ItemList({items}) {

    return (
        <div className="itemList">
            {items.map(el => <Item key={el.id} categoria={el.categoria} name={el.name} price={el.price} img={el.img}/>)}
        </div>
    );
} */
export default function ItemList({items, id}) {

    return (
        <div className="itemList">
            {id? 
                items.filter(el => el.categoria === id).map((el) => <Item key={el.id} el={el}/>)
                    :items.map((el) => <Item key={el.id} el={el}/>)
            }
        </div>
    );
}