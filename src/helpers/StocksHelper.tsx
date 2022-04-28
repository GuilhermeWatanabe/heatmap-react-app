import { StockPanelSize } from 'enums/StockPanelSize';
import { IStock } from 'interfaces/IStock';

export default class StocksHelper {
	private stocksTotalArea: number;
	private proportionalityCoefficient: number;
	private remainigHeight: number;
	private remainigLenght: number;

	constructor(private stocks: IStock[]) {
		this.stocksTotalArea = this.sumTheAreaOfAllStocks();
		this.proportionalityCoefficient = this.getProportionalityCoefficient();
		this.remainigHeight = StockPanelSize.HEIGHT;
		this.remainigLenght = StockPanelSize.WIDTH;
	}

	private sumTheAreaOfAllStocks(): number {
		return this.stocks.reduce((sum, element) => sum + element.volume, 0);
	}

	private getProportionalityCoefficient(): number {
		return StockPanelSize.TOTALAREA / this.stocksTotalArea;
	}

	public createTheBoxes(volume: number): number[] {
		let height: number;
		let width: number;
		const proportionalVolume = volume * this.proportionalityCoefficient;

		if(this.remainigHeight < this.remainigLenght) {
			height = this.remainigHeight;
			width = proportionalVolume / height;
			this.remainigLenght -= width;
		} else {
			width = this.remainigLenght;
			height = proportionalVolume / width;
			this.remainigHeight -= height;
		}

		return [height, width];
	}

	public static defineColor(value: number|null):string {
		if(value === null) {
			return 'white';
		}
		switch (true) {
		case (value <= -3):
			return ('rgb(153, 31, 41)');
		case (value <= -2):
			return ('rgb(242, 54, 69)');
		case (value <= -1):
			return ('rgb(247, 124, 128)');
		case (value >= 3):
			return ('rgb(5, 102, 54)');
		case (value >= 2):
			return ('rgb(8, 153, 80)');
		case (value >= 1):
			return ('rgb(66, 189, 127)');
		default:
			return ('rgb(193, 196, 205)');
		}
	}
}