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
}