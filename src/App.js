import './App.css';
import Layout from './Components/Layout';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useReducer, useEffect } from 'react';

export const ProductContext = React.createContext();

const initialState = {
	warehouseData: [],
	priceHistory: []
}

const productReducer = (state, action) => {
	state = state || initialState;

	switch(action.type) {
		case 'setProducts':
			state = {
				...state,
				warehouseData: action.products
			}
			break;
		case 'setPriceHistory':
			state = {
				...state,
				priceHistory: action.priceHistory
			}
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
        const products = JSON.parse(result);
		const priceHistory = JSON.parse(priceResult);
        dispatch({type: 'setProducts', products});
		dispatch({type: 'setPriceHistory', priceHistory});
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
