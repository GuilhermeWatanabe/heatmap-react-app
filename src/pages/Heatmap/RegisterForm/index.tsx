import { placeholder } from '@babel/types';
import axios from 'axios';
import { useState } from 'react';
import styles from './RegisterForm.module.scss';

export default function RegisterForm() {
	const [name, setName] = useState<string>('');
	const [value, setValue] = useState<number>(0);
	const [volume, setVolume] = useState<number>(0);

	function storeStock(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		axios.post('http://127.0.0.1:8000/api/stocks', {
			value: 100,
			volume: 1000
		})
			.then((res) => {
				alert('Cadastrado.');
			});

	}

	return (
		<form className={styles.form} onSubmit={(e) => storeStock(e)}>
			<fieldset>
				<legend className={styles.title}>Cadastro</legend>
				<input type="text" onChange={e => setName(e.target.value)} placeholder="Nome" />
				<input type="number" onChange={e => setValue(parseFloat(e.target.value))} placeholder="Porcentagem" />
				<input type="number" onChange={e => setVolume(parseInt(e.target.value))} placeholder="Volume" />
				<button type='submit'>Cadastrar</button>
			</fieldset>
		</form>

	);
}