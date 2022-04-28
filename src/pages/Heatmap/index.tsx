import { IStock } from 'interfaces/IStock';
import styles from './Heatmap.module.scss';
import Stock from './Stock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StocksHelper from 'helpers/StocksHelper';
import RegisterForm from './RegisterForm';

export default function Heatmap() {
	//const [stocks, setStocks] = useState<IStock[]>([]);
	const stocks: IStock[] = [
		{
			id: 1,
			name: 'aaaaa',
			value: -5,
			volume: 9588
		},
		{
			id: 2,
			name: 'bbbbb',
			value: -2.1,
			volume: 4939
		},
		{
			id: 3,
			name: 'ccccc',
			value: -1.1,
			volume: 4901
		},
		{
			id: 4,
			name: 'ddddd',
			value: 5,
			volume: 1638
		},
	];
	const stocksHelper: StocksHelper = new StocksHelper(stocks);

	//function deleteStock(id: number): void {
	//	axios.delete(`http://127.0.0.1:8000/api/stocks/${id}`)
	//		.then(() => {
	//			const list = stocks.filter(s => s.id !== id);
	//			setStocks([...list]);
	//		});
	//}


	useEffect(() => {
		//axios.get<IStock[]>('http://127.0.0.1:8000/api/stocks')
		//	.then(res => setStocks(res.data));
	}, []);

	return (
		<main className={styles.main}>
			<RegisterForm />
			<div className={styles.heatmap}>
				{stocks.sort((a, b) => (b.volume - a.volume))
					.map(stock => (
						<Stock
							key={stock.id}
							{...stock}
							stocksHelper={stocksHelper}
						/>
					))}
			</div>
		</main>
	);
}