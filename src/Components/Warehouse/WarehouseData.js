import React, { useContext, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import PageHeader from '../PageHeader';
import { ProductContext } from '../../App';
import WarehouseActionBtn from './Features/WarehouseActionBtn';

const columnDefs = [
    { headerName: "Name", field: "name", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "EAN", field: "ean", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Type", field: "type", filter: false, sortable: true, flex: 1, resizable: true, floatingFilter: false, valueFormatter: typeFormatter },
    { headerName: "Weight (g)", field: "weight", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Color", field: "color", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Actions", field: "action", filter: false, sortable: false, flex: 2, resizable: false, cellStyle: {textAlign: "center"}, cellRenderer: 'warehouseActionBtn'  }
];

export default function WarehouseData() {

    const productContext = useContext(ProductContext);
    const [frameworkComponents, setframeworkComponents] = useState({
        warehouseActionBtn: WarehouseActionBtn
    });

    return(
        <div>
            <PageHeader header="Products"/>
            <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
                <AgGridReact
                    rowData={productContext.productsState.warehouseData}
                    columnDefs={columnDefs}
                    overlayNoRowsTemplate="No warehouse products"
                    frameworkComponents={frameworkComponents}
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