import React, { useState } from 'react'
import ApiForm from '../form/apiForm'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import '../form/form.scss'
import TypePokemonApi from './TypePokemonApi';


function Form() {

	let history = useHistory()

	const [formField, setFormField] = useState({
		name: '',
		err: false,
		errMsg: ''
	})

	const [selectedPokemons, setSelectedPokemons] = useState([])

	const setName = (e) => {
		setFormField({
			...formField,
			name: e.currentTarget.value.toLowerCase(),
		})
	}

	const getName = (e) => {
		e.preventDefault()
		if(!selectedPokemons.length){
			ApiForm(formField.name)
			.then((apiData) => {
				setFormField({
					...formField,
					errMsg: ''
				})
				history.push(`/${formField.name}`)
			})
			.catch(() => {
				setFormField({
					...formField,
					errMsg: 'Ops, esse pokemon não existe'
				})
			})

		}
		else {
			history.push(`/-${selectedPokemons.join('-')}`)
		}
	}

	const handleSelect = (e) => {
		if(e.currentTarget.checked){
			setSelectedPokemons([
				...selectedPokemons,
				e.currentTarget.value
			])
		}
	}
	console.log(selectedPokemons)
	const type = [
		{ label: 'FOGO', value: 'fire' },
		{ label: 'ÁGUA', value: 'water' },
		{ label: 'INSETO', value: 'bug' },
		{ label: 'NORMAL', value: 'normal' },
		{ label: 'VENOSO', value: 'poison' },
		{ label: 'ELÉTRICO', value: 'electric' },
		{ label: 'TERRA', value: 'ground' },
		{ label: 'LUTADOR', value: 'fighting' },
		{ label: 'PSÍQUICO', value: 'psychic' },
		{ label: 'PEDRA', value: 'rock' },
		{ label: 'VOADOR', value: 'flying' },
		{ label: 'FANTASMA', value: 'ghost' },
		{ label: 'GELO', value: 'ice' },
		{ label: 'DRAGÃO', value: 'dragon' },
		{ label: 'METÁLICO', value: 'steel' },
		{ label: 'NOTURNO', value: 'dark' },
		{ label: 'FADA', value: 'fairy' },
	]

	return (
		<>
			<form onSubmit={getName}>
				<input
					type="text"
					onChange={setName}
					value={formField.name}
					className='input_form'
					name='name'
					placeholder="Nome do pókemon"
				/>
				<button type="submit">Buscar</button>
				<p>{formField.errMsg}</p>
				<div>
					{
						type.map((value) => {
							return (
								<div key={value.value}>
									<label>{value.label}</label>
									<input onChange={handleSelect} type='checkbox' value={value.value} />
								</div>
							)
						})
					}
				</div>
				<button type="submit">Buscar</button>
			</form>
		</>
	)
}

export default Form;