import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { ProductContext } from '../../App';

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Quantity change'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Quantity'
        }
    },
    series: [
        {
            name: 'Quantity history',
            data: []
        }
    ]
  };

export default function WarehouseQuantityHistory() {
    const location = useLocation();
    const { id } = location.state;
    const productContext = useContext(ProductContext);
    const { quantityHistory } = productContext.productsState;
    const quantityHistoryById = quantityHistory.filter(price => price.productId === id).slice(-5);
    options.series[0].data = quantityHistoryById.map((element) => {return element.quantity});
    options.xAxis.categories = quantityHistoryById.map((element) => {
        const modifiedDateTime = new Date(element.modifiedDateTime);
        return modifiedDateTime.getFullYear() + '-' + (modifiedDateTime.getMonth()+1) + '-' + modifiedDateTime.getDate() + ' '
            + modifiedDateTime.getHours() + ':' + modifiedDateTime.getMinutes() + ':' + modifiedDateTime.getSeconds()
    });
    return(
        <HighchartsReact highcharts={Highcharts} options={options}/>
    );
}