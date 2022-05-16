import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../App';

export default (props) => {
    const [id] = useState(props.data.id);
    const [quantity, setQuantity] = useState(props.data.quantity);
    const productContext = useContext(ProductContext);
    function onClickHandler(event) {
        if(event.key === 'Enter')
        {
            let productsList = productContext.productsState.productsList;
            let { quantityHistory } = productContext.productsState;
            let product = productsList.find(prod => prod.id === id);
            if(product.quantity !== quantity)
            {
                product.quantity = quantity;
                productsList = productsList.map(function(prod) {
                    if(prod.id === id)
                        return product
                    else 
                        return prod
                });
                quantityHistory.push({
                    id: quantityHistory.length+1,
                    quantity: quantity,
                    productId: id,
                    modifiedDateTime: new Date()
                });
                localStorage.setItem('products', JSON.stringify(productsList));
                localStorage.setItem('quantityHistory', JSON.stringify(quantityHistory));
                productContext.productsDispatch({type: 'setProducts', productsList});
                productContext.productsDispatch({type: 'setQuantityHistory', quantityHistory});
            }
        }
    }
    function onChangeHandler(event) {
        setQuantity(
            Number(event.target.value)
        );
    }
    return(
        <div>
            <input size='20' value={quantity} type='number' min={0} max={999} step={1} onChange={onChangeHandler} onKeyUp={onClickHandler}/>
        </div>
    );
}