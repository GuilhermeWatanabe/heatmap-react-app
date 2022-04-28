import axios from 'axios';
import StocksHelper from 'helpers/StocksHelper';
import { useEffect, useState } from 'react';
import styles from './Stock.module.scss';

interface Props {
  id: number,
  name: string,
  value: number,
  volume: number,
  stocksHelper: StocksHelper,
}

export default function Stock(props: Props) {
	const { id, name, value, volume, stocksHelper } = props;
	const [background, setBackground] = useState<string>('');
	const [height, setHeight] = useState<number>();
	const [width, setWidth] = useState<number>();

	const style = {
		background: background,
		height: height + 'px',
		width: width + 'px'
	};

	function deleteStock(): void {
		axios.delete(`http://127.0.0.1:8000/api/stocks/${id}`)
			.then(() => {
				window.location.reload();
			});
	}

	useEffect(() => {
		const [h, w] = stocksHelper.createTheBoxes(volume);
		setHeight(h);
		setWidth(w);
		setBackground(StocksHelper.defineColor(value));
	}, []);

	return (
		<div 
			className={styles.stock} 
			style={style} 
			onDoubleClick={deleteStock} 
		>
			<p>{name}</p>
			<p>{value}</p>
		</div>
	);
}