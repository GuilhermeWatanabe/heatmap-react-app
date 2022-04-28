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

	function colorSwitch(value: number): void {
		switch (true) {
		case (value <= -3):
			setBackground('rgb(153, 31, 41)');
			break;
		case (value <= -2):
			setBackground('rgb(242, 54, 69)');
			break;
		case (value <= -1):
			setBackground('rgb(247, 124, 128)');
			break;
		case (value >= 1):
			setBackground('rgb(66, 189, 127)');
			break;
		case (value >= 2):
			setBackground('rgb(8, 153, 80)');
			break;
		case (value >= 3):
			setBackground('rgb(5, 102, 54)');
			break;
		default:
			setBackground('rgb(193, 196, 205)');
		}
	}

	useEffect(() => {
		const [h, w] =stocksHelper.createTheBoxes(volume);
		setHeight(h);
		setWidth(w);
		colorSwitch(value);
	}, []);

	return (
		<div className={styles.stock} style={style} >
			<p>{name}</p>
			<p>{value}</p>
		</div>
	);
}