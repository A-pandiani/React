import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);
    return (
        <div className="itemDetailContainer">
            {/* <h1 className="itemDetailContainer__title">Soy Item Detail Container</h1> */}
            {loader? <h2>Cargando...</h2>: <ItemDetail item={item}/>}
        </div>
    );
}
