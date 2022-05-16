import './App.css';
import Layout from './Components/Layout';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useReducer, useEffect } from 'react';

export const ProductContext = React.createContext();

const initialState = {
	productsList: [],
	priceHistory: [],
	quantityHistory: []
}

const productReducer = (state, action) => {
	state = state || initialState;

	switch(action.type) {
		case 'setProducts':
			state = {
				...state,
				productsList: action.productsList
			}
			break;
		case 'setPriceHistory':
			state = {
				...state,
				priceHistory: action.priceHistory
			}
			break;
		case 'setQuantityHistory':
			state = {
				...state,
				quantityHistory: action.quantityHistory
			}
			break;
		default:
			break;
	}
	return state;
}

function App() {
	const [products, dispatch] = useReducer(productReducer, initialState);
	useEffect(() => {
        const result = localStorage.getItem('products');
		const priceResult = localStorage.getItem('priceHistory');
		const quantityResult = localStorage.getItem('setQuantityHistory');
        const productsList = result ? JSON.parse(result) : [];
		const priceHistory = priceResult ? JSON.parse(priceResult) : [];
		const quantityHistory = quantityResult ? JSON.parse(quantityResult) : [];
        dispatch({type: 'setProducts', productsList});
		dispatch({type: 'setPriceHistory', priceHistory});
		dispatch({type: 'setQuantityHistory', quantityHistory});
    }, []);
	
	return (
		<div className="App">
			<ProductContext.Provider value={{productsState: products, productsDispatch: dispatch}}>
				<BrowserRouter>
					<Layout/>
				</BrowserRouter>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
