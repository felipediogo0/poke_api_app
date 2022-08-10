var play = document.querySelector('button')
var poke = document.querySelector('input')

play.addEventListener('click', function (e) {

    e.preventDefault()

    let url = "https://pokeapi.co/api/v2/pokemon/";

    poke = document.getElementById('pokemon_id')

    poke = url + poke.value

    poke = poke.toLocaleLowerCase()

    let img_poke = document.getElementById('poke_img')

    let info_poke = document.getElementById('poke_info')

    let return_html = ''

    fetch(poke)
        .then(info_poke => info_poke.json())
        .then(function (data) {
            return_html = 'Pokémon: ' + Upp(data.name) + '<br>'
            return_html = return_html + 'Tipo: ' + Upp(data.types[0].type.name) + '<br>'
            return_html = return_html + 'Ataque: ' + Upp(data.moves[0].move.name)
            info_poke.innerHTML = return_html

            img_poke.innerHTML = "<img src='" + data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"
        })
});

function Upp(letter) {
    return letter[0].toUpperCase() + letter.substr(1)
}

