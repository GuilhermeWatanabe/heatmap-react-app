import StocksHelper from 'helpers/StocksHelper';
import { useEffect, useState } from 'react';

interface Props {
	id: number,
	name: string,
	value: number,
	volume: number,
  stocksHelper: StocksHelper
}

export default function Stock(props: Props) {
	const { id, name, value, volume, stocksHelper } = props;
	const [background, setBackground] = useState<string>('');
  let [height, width] = stocksHelper.createTheBoxes(volume);

	const style = {
		background: background,
    float: 'left',
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
		colorSwitch(value);
	}, []);

	return (
		<div style={style}>
			<p>{name}</p>
			<p>{value}</p>
		</div>
	);
}