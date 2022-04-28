import { IStock } from 'interfaces/IStock';
import styles from './Heatmap.module.scss';
import Stock from './Stock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StocksHelper from 'helpers/StocksHelper';
import RegisterForm from './RegisterForm';

export default function Heatmap() {
	const [stocks, setStocks] = useState<IStock[]>([]);
	const stocksHelper: StocksHelper = new StocksHelper(stocks);

	useEffect(() => {
		axios.get<IStock[]>('http://127.0.0.1:8000/api/stocks/')
			.then(res => setStocks(res.data));
	}, []);

	return (
		<main className={styles.main}>
			<RegisterForm stocks={stocks} setStocks={setStocks} />
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