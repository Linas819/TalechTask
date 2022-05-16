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
        text: 'Price change'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Prices'
        }
    },
    series: [
        {
            name: 'Price history',
            data: []
        }
    ]
  };

export default function WarehousePriceHistory() {
    const location = useLocation();
    const { id } = location.state;
    const productContext = useContext(ProductContext);
    const { priceHistory } = productContext.productsState;
    const priceHistoryById = priceHistory.filter(price => price.productId === id).slice(0, 5);
    options.series[0].data = priceHistoryById.map((element) => {return element.price});
    options.xAxis.categories = priceHistoryById.map((element) => {
        const modifiedDateTime = new Date(element.modifiedDateTime);
        let a = modifiedDateTime.getDay();
        return modifiedDateTime.getFullYear() + '-' + (modifiedDateTime.getMonth()+1) + '-' + modifiedDateTime.getDate() + ' '
            + modifiedDateTime.getHours() + ':' + modifiedDateTime.getMinutes() + ':' + modifiedDateTime.getSeconds()
    });
    return(
        <HighchartsReact highcharts={Highcharts} options={options}/>
    );
}