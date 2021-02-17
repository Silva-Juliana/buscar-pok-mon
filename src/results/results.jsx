import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ApiForm from '../form/apiForm'
import TypePokemonApi from '../form/TypePokemonApi'
import '../results/results.scss'
import girl from '../images/girl.png'
import logo from '../images/logo.png'


function Results() {

	const params = useParams()

	const [pokemon, setPokemon] = useState({
		name: '',
		photo: '',
	})

	const [fireList, setFireList] = useState([])
	const [waterList, setWaterList] = useState([])
	const [bugList, setBugList] = useState([])
	const [normalList, setNormalList] = useState([])
	const [poisonList, setPoisonList] = useState([])
	const [electricList, setElectricList] = useState([])
	const [groundList, setGroundList] = useState([])
	const [fightingListt, setFightingList] = useState([])
	const [psychicList, setPsychicList] = useState([])
	const [rockList, setRockList] = useState([])
	const [flyingList, setFlyingList] = useState([])
	const [ghostList, setGhostList] = useState([])
	const [iceList, setIceList] = useState([])
	const [dragonList, setDragonList] = useState([])
	const [steelList, setSteelList] = useState([])
	const [darkList, setDarkList] = useState([])
	const [fairyList, setFairyList] = useState([])

	const pokemonData = (typeResults) => {
		return typeResults.pokemon.map((value) => {
			return {
				name: value.pokemon.name
			}
		})
	}

	useEffect(() => {
		if (params.pokemonName) {
			if (params.pokemonName.charAt(0) === '-') {
				const types = params.pokemonName.split('-')

				types.forEach((value) => {
					TypePokemonApi(value)
						.then(res => {
							if (value === 'fire') {
								setFireList(pokemonData(res))
							}
							if (value === 'water') {
								setWaterList([]);
							}
							if (value === 'bug') {
								setBugList([]);
							}
							if (value === 'normal') {
								setNormalList([]);
							}
							if (value === 'poison') {
								setPoisonList([]);
							}
							if (value === 'electric') {
								setElectricList([]);
							}
							if (value === 'ground') {
								setGroundList([]);
							}
							if (value === 'fighting') {
								setFightingList([]);
							}
							if (value === 'psychic') {
								setPsychicList([]);
							}
							if (value === 'rock') {
								setRockList([]);
							}
							if (value === 'flying') {
								setFlyingList([]);
							}
							if (value === 'ghost') {
								setGhostList([]);
							}
							if (value === 'ice') {
								setIceList([]);
							}
							if (value === 'dragon') {
								setDragonList();
							}
							if (value === 'steel') {
								setSteelList([]);
							}
							if (value === 'dark') {
								setDarkList([]);
							}
							if (value === 'fairy') {
								setFairyList([]);
							}
						})
				})
			} else {
				ApiForm(params.pokemonName)
					.then(res => {
						setPokemon({
							...pokemon,
							name: res.name,
							photo: res.sprites.front_default,
						})

					})
			}
		}
	}, [params.pokemonName])
	console.log(fireList)
	return (
		<>
			<div className="container-results">
				<div className="box-logo">
					<img className="logo" src={logo} />
				</div>
				<div className="box-results">
					<div className="card">
						<img className="photo-pokemon" src={pokemon.photo} />
						<hr />
						<span className="name-pokemon">Nome: {pokemon.name}</span>
					</div>
					<div className="box-img-results">
						<img className="img-results" src={girl} />
					</div>
					{
						fireList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						waterList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						bugList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						normalList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						poisonList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						electricList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						groundList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						fightingListt.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						psychicList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						rockList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						flyingList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						ghostList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						iceList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						dragonList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						steelList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						darkList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
					{
						fairyList.map(value => {
							return (
								<div className="card">
									<img className="photo-pokemon" src={value.photo} />
									<span className="name-pokemon">{value.name}</span>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default Results;