const nums = [1, 2, 3, 4, 5]
const squares = nums.map(function(num) {
    return num * num
})

const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1)))

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
