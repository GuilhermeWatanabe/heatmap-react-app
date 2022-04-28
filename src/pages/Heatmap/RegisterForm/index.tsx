import axios from 'axios';
import { IStock } from 'interfaces/IStock';
import { useState } from 'react';
import styles from './RegisterForm.module.scss';

interface Props {
	stocks: IStock[],
	setStocks: React.Dispatch<React.SetStateAction<IStock[]>>
}

export default function RegisterForm(props: Props) {
	const { stocks, setStocks } = props;
	const [name, setName] = useState<string>('');
	const [value, setValue] = useState<number>(0);
	const [volume, setVolume] = useState<number>(0);

	function storeStock(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		axios.post('http://127.0.0.1:8000/api/stocks', {
			name: name,
			value: value,
			volume: volume
		})
			.then((res) => {
				setStocks([...stocks, res.data]);
				window.location.reload();
			});
	}

	return (
		<form className={styles.form} onSubmit={(e) => storeStock(e)}>
			<fieldset>
				<legend className={styles.title}>Cadastro</legend>
				<input type="text" onChange={e => setName(e.target.value)} placeholder="Nome" required />
				<input type="number" onChange={e => setValue(parseFloat(e.target.value))} placeholder="Porcentagem" required />
				<input type="number" onChange={e => setVolume(parseInt(e.target.value))} placeholder="Volume" required />
				<button type='submit'>Cadastrar</button>
			</fieldset>
		</form>
	);
}