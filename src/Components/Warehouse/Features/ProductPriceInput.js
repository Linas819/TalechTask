import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../App';

export default (props) => {
    const [id] = useState(props.data.id);
    const [price, setPrice] = useState(props.data.price);
    const productContext = useContext(ProductContext);
    function onClickHandler(event) {
        if(event.key === 'Enter')
        {
            let productsList = productContext.productsState.productsList;
            let priceHistory = productContext.productsState.priceHistory;
            let product = productsList.find(prod => prod.id === id);
            if(product.price !== price)
            {
                product.price = price;
                productsList = productsList.map(function(prod) {
                    if(prod.id === id)
                        return product
                    else 
                        return prod
                });
                priceHistory.push({
                    id: priceHistory.length+1,
                    price: price,
                    productId: id,
                    modifiedDateTime: new Date()
                });
                localStorage.setItem('products', JSON.stringify(productsList));
                localStorage.setItem('priceHistory', JSON.stringify(priceHistory));
                productContext.productsDispatch({type: 'setProducts', productsList});
                productContext.productsDispatch({type: 'setPriceHistory', priceHistory});
            }
        }
    }
    function onChangeHandler(event) {
        setPrice(
            Number(event.target.value)
        );
    }
    return(
        <div>
            <input size='20' value={price} type='number' min={0.00} max={9999999} step={0.01} onChange={onChangeHandler} onKeyUp={onClickHandler}/>
        </div>
    );
}