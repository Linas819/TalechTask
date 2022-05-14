import './App.css';
import Layout from './Components/Layout';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useReducer } from 'react';

export const ProductContext = React.createContext();

const initialState = {
	warehouseData: []
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
		default:
			break;
	}
	return state;
}

function App() {
	const [products, dispatch] = useReducer(productReducer, initialState);
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
