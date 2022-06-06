/* function ItemListContainer({ greeting = "Hola soy antonio"}) {
    return(
        <div className="ItemListContainer">
    <h1>{greeting}</h1>
    </div>
    )
}
export default ItemListContainer; */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';
import ItemList from "./ItemList";



export default function ItemListContainer() {
    const [items,setItems] = useState([]);
    const [setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        if (!id) {
            getDocs(queryCollection)
            .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
            .then(data => data.sort((a, b) => {
                if (a.category > b.category) {
                    return 1;
                }
                if (a.category < b.category) {
                    return -1;
                }
                return 0;
            }))
            .then(sorted => setItems(sorted))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        } else {
            const queryCollectionFilter = query(queryCollection, where('category','==',id));
            getDocs(queryCollectionFilter)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }
    },[id]);
    return 
    
    
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