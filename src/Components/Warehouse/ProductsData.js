import React, { useContext, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import PageHeader from '../PageHeader';
import { ProductContext } from '../../App';
import ProductActionBtn from './Features/ProductActionBtn';
import ProductPriceInput from './Features/ProductPriceInput';
import ProductQuantityInput from './Features/ProductQuantityInput';

const columnDefs = [
    { headerName: "Name", field: "name", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "EAN", field: "ean", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Type", field: "type", filter: false, sortable: true, flex: 1, resizable: true, floatingFilter: false, valueFormatter: typeFormatter },
    { headerName: "Weight (g)", field: "weight", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Color", field: "color", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Price", field: "price", filter: true, sortable: true, flex: 1, resizable: true, cellRenderer: 'productPriceInput' },
    { headerName: "Quantity", field: "quantity", filter: true, sortable: true, flex: 1, resizable: true, cellRenderer: 'productQuantityInput' },
    { headerName: "Actions", field: "action", filter: false, sortable: false, flex: 1, resizable: false, cellStyle: {textAlign: "center"}, cellRenderer: 'productActionBtn'  }
];

export default function ProductsData() {

    const productContext = useContext(ProductContext);
    const [frameworkComponents] = useState({
        productActionBtn: ProductActionBtn,
        productPriceInput: ProductPriceInput,
        productQuantityInput: ProductQuantityInput
    });

    return(
        <div>
            <PageHeader header="Products"/>
            <div className="ag-theme-alpine" style={{height: 700, width: "100%"}}>
                <AgGridReact
                    rowData={productContext.productsState.productsList}
                    columnDefs={columnDefs}
                    overlayNoRowsTemplate="No warehouse products"
                    components={frameworkComponents}
                    >
                </AgGridReact>
            </div>
        </div>
    );
}

function typeFormatter(params) {
    let formattedValue = "";
    switch(params.value) {
        case 0:
            formattedValue = "Food product";
            break;
        default:
            formattedValue = "Product";
            break;
    }
    return formattedValue;
}