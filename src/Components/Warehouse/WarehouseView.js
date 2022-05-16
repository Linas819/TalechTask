import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../../App';

export default function WarehouseView() {
    const location = useLocation();
    const { id } = location.state;
    const productContext = useContext(ProductContext);
    let product = productContext.productsState.warehouseData.find(product => product.id === id);
    return(
        <div>
            <div className='grid-product-view-edit'>
                <div className='grid-product-view-edit-item'>
                    <b>ID:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {id}
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Name:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {product ? product.name : ""}
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>EAN:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {product ? product.ean : ""}
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Type:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {product ? product.type : ""}
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Weight (g):</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {product ? product.weight : ""}
                </div>
                <div className='grid-product-view-edit-item'>
                    <b>Color:</b>
                </div>
                <div className='grid-product-view-edit-item'>
                    {product ? product.color : ""}
                </div>
            </div>
        </div>
    );
}