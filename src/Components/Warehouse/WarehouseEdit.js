import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../App';
import PageHeader from "../PageHeader";

export default function WareHouseEdit() {
    const location = useLocation();
    const { id } = location.state;
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: 0,
        name: "",
        ean: 0,
        type: 0,
        weight: 0,
        color: ""
    });
    const productContext = useContext(ProductContext);
    let currentProduct = productContext.productsState.warehouseData.find(product => product.id === id);
    function setData(currentProduct) {
        if(!currentProduct) {
            return;
        } else if(product.id === 0) {
            setProduct(prevState => {
                return currentProduct
            })
        }
    }
    setData(currentProduct);
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
        products = products.map(function(prod) {
            if(prod.id === product.id)
                return product
            else 
                return prod
        });
        localStorage.setItem('products', JSON.stringify(products));
        productContext.productsDispatch({type: 'setProducts', products});
        navigate(-1);
    }
    return(
        <div>
            <PageHeader header={"Edit product: "+id}/>
            <div className='grid-product-view-edit'>
                <div className='grid-product-view-edit-item'>
                    <b>Name:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    <input name='name' onChange={onChangeHandler} value={product.name}/>
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>EAN:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                <input name='ean' type='number' min={1} max={999999999} step={1} onChange={onChangeHandler} value={product.ean}/>
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Type:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                <input name='type' type='number' min={0} max={5} step={1} onChange={onChangeHandler} value={product.type}/>
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Weight (g):</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    <input name='weight' type='number' min={0.000} max={9999999} step={0.001} onChange={onChangeHandler} value={product.weight}/>
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Color:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    <input name='color' onChange={onChangeHandler} value={product.color}/>
                </div>
            </div>
            <button onClick={onClickHandler} style={{backgroundColor: '#4CAF50'}}>Save</button>
        </div>
    );
}