import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../App';

export default (props) => {
    const [id, setId] = useState(props.data.id);
    const productContext = useContext(ProductContext);
    const onClickHandler = () => {
        let products = productContext.productsState.warehouseData;
        products = products.filter(product => product.id != id);
        localStorage.setItem('products', JSON.stringify(products));
        productContext.productsDispatch({type: 'setProducts', products});
    }
    return(
        <div>
            <button>VIEW</button>
            <button>EDIT</button>
            <button onClick={onClickHandler}>DELETE</button>
        </div>
    );
}