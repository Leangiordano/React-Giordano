import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function getProduct(id) {
    const dataBase = getFirestore();
    const itemRef = doc(dataBase, "items", id);
    return getDoc(itemRef);
}

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);
    console.log(data);
    useEffect(() => {
      getProduct(id)
        .then((res) => {
            setData({ ...res.data(), id: res.id });
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);
    

    return (
        <div className="item-detail-container">
           {loading ? <h1>Cargando...</h1> : <ItemDetail product={data} />}
        </div>
    );
}

export default ItemDetailContainer