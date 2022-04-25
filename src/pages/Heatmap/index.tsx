import React from 'react';
import { IStock } from 'interfaces/IStock';
import styles from './Heatmap.module.scss';
import Stock from './Stock';

export default function Heatmap() {

	const stocks: IStock[] = [
		{
			id: 1,
			name: 'example 1',
			value: 1.50,
			volume: 10000
		},
		{
			id: 2,
			name: 'example 2',
			value: 5,
			volume: 999
		},
		{
			id: 3,
			name: 'example 3',
			value: -3.20,
			volume: 1500
		}
	];

	//useEffect(() => {
	//	fetch('http://127.0.0.1:8000/api/stocks')
	//		.then(res => res.json())
	//		.then((data: any[]) => {
	//			console.log(data);
	//		});
	//
	//}, []);

	return (
		<main className={styles.heatmap}>
			{stocks.map(stock => (
				<Stock key={stock.id} {...stock}/>
			))}
		</main>
	);
}