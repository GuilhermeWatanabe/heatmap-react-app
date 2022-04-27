import { IStock } from 'interfaces/IStock';
import styles from './Heatmap.module.scss';
import Stock from './Stock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import http from 'http';
import StocksHelper from 'helpers/StocksHelper';

export default function Heatmap() {
	//const [stocks, setStocks] = useState<IStock[]>([]);
	const stocks: IStock[] = [
		{
			id: 1,
			name: 'example 1',
			value: -5,
			volume: 1000
		},
		{
			id: 2,
			name: 'example 2',
			value: -2.1,
			volume: 150
		},
		{
			id: 3,
			name: 'example 3',
			value: -1.1,
			volume: 5000
		},
		{
			id: 4,
			name: 'example 2',
			value: 5,
			volume: 300
		},
		{
			id: 5,
			name: 'example 2',
			value: 1.5,
			volume: 2200
		},
  ];
  let stocksHelper: StocksHelper = new StocksHelper(stocks);

	useEffect(() => {
		//axios.get('https://62683b4a01dab900f1cb8963.mockapi.io/stock')
		//	.then(res => setStocks(res.data));
	}, []);

	return (
		<main className={styles.heatmap}>
			{stocks.sort((a, b) => (b.volume - a.volume))
				.map(stock => (
					<Stock
						key={stock.id}
						{...stock}
						stocksHelper={stocksHelper}
					/>
				))}
		</main>
	);
}