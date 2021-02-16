
function ApiForm(name = ''){
    let urlpokemon = "https://pokeapi.co/api/v2/pokemon/"

    urlpokemon = urlpokemon + name

    return fetch(urlpokemon , { method: 'GET'})
    .then(res=> {
        return res.json()
    })
}

export default ApiForm;