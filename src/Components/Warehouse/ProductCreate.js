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
        color: "",
        price: 0,
        quantity: 0
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
        let productsList = productContext.productsState.productsList;
        product.id = productsList.length+1;
        productsList.push(product);
        localStorage.setItem('products', JSON.stringify(productsList));
        productContext.productsDispatch({type: 'setProducts', productsList});
        navigate(-1);
    }
    return(
        <div>
            <PageHeader header="Create product"/>
            <input placeholder='Name' size='20' name='name' onChange={onChangeHandler}/><br/><br/>
            <input placeholder='EAN' size='20' name='ean' type='number' min={1} max={999999999} step={1} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Type' size='20' name='type' type='number' min={0} max={5} step={1} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Weight' size='20' name='weight' type='number' min={0.000} max={9999999} step={0.001} onChange={onChangeHandler}/><br/><br/>
            <input placeholder='Color' size='20' name='color' onChange={onChangeHandler}/><br/><br/>
            <button onClick={onClickHandler} style={{backgroundColor: '#4CAF50'}}>Save</button>
        </div>
    );
}