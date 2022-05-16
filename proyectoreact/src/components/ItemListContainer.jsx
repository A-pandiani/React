/* function ItemListContainer({ greeting = "Hola soy antonio"}) {
    return(
        <div className="ItemListContainer">
    <h1>{greeting}</h1>
    </div>
    )
}
export default ItemListContainer; */
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch("/data/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemListContainer">
            {/* <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1> */}
            {loader? <h2>Cargando...</h2>: <ItemList items={items} id={id} />}
        </div>
    );
}
/* const products = [
    {id: "01", categoria: "Peliculas", name: "Dr.Strange", price: 500, img: '"../imagenes/DrStrange.jpg"'},
    {id: "02", categoria: "Series", name: "Hombre Araña", price: 400, img: "../imagenes/HombreAraña.jpg"},
    {id: "03", categoria: "Peliculas", name: "Superman", price: 250, img: "../imagenes/Superman.jpg"},
    
];

const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
})

export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    useEffect(() => {
        getFetch
        .then(res => setItems(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
            {loader? <h2>Cargando...</h2>: <ItemList items={items} />}
        </div>
    );
} */