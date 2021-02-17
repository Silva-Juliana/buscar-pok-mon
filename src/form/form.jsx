import React, { useState } from 'react'
import ApiForm from '../form/apiForm'
import { useHistory } from "react-router-dom";
import '../form/form.scss'
import pokebola from '../images/pokebola.png'
import steel from '../images/steel.png'
import fire from '../images/fire.png'
import water from '../images/water.png'
import bug from '../images/bug.png'
import normal from '../images/normal.png'
import poison from '../images/poison.png'
import electric from '../images/electric.png'
import ground from '../images/ground.png'
import fighting from '../images/fighting.png'
import pychic from '../images/pychic.png'
import rock from '../images/rock.png'
import flying from '../images/flying.png'
import ghost from '../images/ghost.png'
import ice from '../images/ice.png'
import dragon from '../images/dragon.png'
import dark from '../images/dark.png'
import fairy from '../images/fairy.png'


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
		if (!selectedPokemons.length) {
			ApiForm(formField.name)
				.then((apiData) => {
					setFormField({
						...formField,
						errMsg: ''
					})
					history.push(`/gh-pages-buscar-pokemon/${formField.name}`)
				})
				.catch(() => {
					setFormField({
						...formField,
						errMsg: 'Ops, esse pokemon não existe'
					})
				})

		}
		else {
			history.push(`/gh-pages-buscar-pokemon/-${selectedPokemons.join('-')}`)
		}
	}

	const handleSelect = (e) => {
		if (e.currentTarget.checked) {
			const tempState = [...selectedPokemons];
			setSelectedPokemons([
				...selectedPokemons,
				e.currentTarget.value
			])
		}
	}
	console.log(selectedPokemons)
	const type = [
		{ label: 'FOGO', img: fire, value: 'fire' },
		{ label: 'ÁGUA', img: water, value: 'water' },
		{ label: 'INSETO', img: bug, value: 'bug' },
		{ label: 'NORMAL', img: normal, value: 'normal' },
		{ label: 'VENOSO', img: poison, value: 'poison' },
		{ label: 'ELÉTRICO', img: electric, value: 'electric' },
		{ label: 'TERRA', img: ground, value: 'ground' },
		{ label: 'LUTADOR', img: fighting, value: 'fighting' },
		{ label: 'PSÍQUICO', img: pychic, value: 'psychic' },
		{ label: 'PEDRA', img: rock, value: 'rock' },
		{ label: 'VOADOR', img: flying, value: 'flying' },
		{ label: 'FANTASMA', img: ghost, value: 'ghost' },
		{ label: 'GELO', img: ice, value: 'ice' },
		{ label: 'DRAGÃO', img: dragon, value: 'dragon' },
		{ label: 'METÁLICO', img: steel, value: 'steel' },
		{ label: 'NOTURNO', img: dark, value: 'dark' },
		{ label: 'FADA', img: fairy, value: 'fairy' },
	]

	return (
		<>
			<form className="form" onSubmit={getName}>
				<div className="informations-input">
					<input
						type="text"
						onChange={setName}
						value={formField.name}
						className='input_form'
						name='name'
						placeholder="Nome do pókemon"
					/>
					<button className="search" type="submit">
						<img className="pokebola" src={pokebola} />
					</button>
				</div>
				<p>{formField.errMsg}</p>
				<h2> OU escolha 1 ou mais tipos de Pokémon</h2>
				<div className="types">
					{
						type.map((value) => {
							return (
								<div className="box-type" key={value.value}>
									<div>
										<img className="img-type" src={value.img} />
									</div>
									<label>{value.label}</label>
									<input className="checkbox" onChange={handleSelect} type='checkbox' value={value.value} />
								</div>
							)
						})
					}
				</div>
				<div className="box-submit">
					<button className="submit" type="submit">Buscar</button>
				</div>
			</form>
		</>
	)
}

export default Form;