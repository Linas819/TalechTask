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
        switch(event.target.name) {
            case 'name':
            case 'color':
                setProduct(prevState => {
                    return { ...prevState, [event.target.name]: event.target.value }
                })
                break;
            default:
                setProduct(prevState => {
                    return { ...prevState, [event.target.name]: Number(event.target.value) }
                })
        }
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
            <input placeholder='EAN' name='ean' type='number' min={1} max={999999999} step={1} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Type' name='type' type='number' min={0} max={5} step={1} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Weight' name='weight' type='number' min={0.000} max={9999999} step={0.001} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Color' name='color' onChange={onChangeHandler}/><br/><br/>
            <button onClick={onClickHandler}>Save</button>
        </div>
    );
}