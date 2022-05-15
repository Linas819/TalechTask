import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../App";
import PageHeader from "../PageHeader";

export default function WarehouseCreate() {
    const productContext = useContext(ProductContext);
    const navigate = useNavigate();
    const[product, setProduct] = useState({
        name: "",
        ean: 0,
        type: 0,
        weight: 0,
        color: ""
    });
    function onChangeHandler(event) {
        setProduct(prevState => {
            return { ...prevState, [event.target.name]: event.target.value }
        })
    }
    function onClickHandler() {
        let products = productContext.productsState.warehouseData;
        product.id = products[products.length-1].id+1;
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        productContext.productsDispatch({type: 'setProducts', products});
        navigate(-1);
    }
    return(
        <div>
            <PageHeader header="Create product"/>
            <input placeholder='Name' name='name' onChange={onChangeHandler}/><br/><br/>
            <input placeholder='EAN' name='ean' onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Type' name='type' onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Weight' name='weight' onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Color' name='color' onChange={onChangeHandler}/><br/><br/>
            <button onClick={onClickHandler}>Save</button>
        </div>
    );
}