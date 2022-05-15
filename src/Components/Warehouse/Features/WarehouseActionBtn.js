import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../../App';

export default (props) => {
    const [id] = useState(props.data.id);
    const productContext = useContext(ProductContext);
    const onClickHandler = () => {
        let products = productContext.productsState.warehouseData;
        products = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        productContext.productsDispatch({type: 'setProducts', products});
    }
    return(
        <div>
            <NavLink to={"/products/"+id} state={{ id: id}}>
                <button style={{backgroundColor: '#6a6868'}}>VIEW</button>
            </NavLink>
            <NavLink to={"/products/"+id+"/edit"} state={{ id: id}}>
                <button style={{backgroundColor: '#3d34b8'}}>EDIT</button>
            </NavLink>
            <button onClick={onClickHandler} style={{backgroundColor: '#b83434'}}>DELETE</button>
        </div>
    );
}