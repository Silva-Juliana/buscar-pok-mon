function TypePokemonApi(type = '') {
	let urlTypePokemon = "https://pokeapi.co/api/v2/type/"

	urlTypePokemon = urlTypePokemon + type

	return fetch(urlTypePokemon, { method: 'GET' })
		.then(res => {
			return res.json()
		})
}

export default TypePokemonApi;