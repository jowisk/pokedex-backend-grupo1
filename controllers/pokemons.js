const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAll = async () => {
  let listadoFinal = [];
  const arrayPokemon = await knex("pokemon")
    .select("nombre", "id", "img")
    .then((res) => {
      return res;
    });
  listadoFinal = await Promise.all(
    arrayPokemon.map(async (pokemon, index) => ({
      ...pokemon,
      types: await knex
        .select("types.nombre")
        .from("types")
        .innerJoin("poketypes", "types.id", "poketypes.types_id")
        .innerJoin("pokemon", "poketypes.pokemon_id", "pokemon.id")
        .where("pokemon.id", pokemon.id)
        .then((res) => {
          return res;
        }),
    }))
  );
  return listadoFinal;
};

const getPokeById = async (id) =>{
  let pokemonFinal = {datos_pokemon:{}, movimientos:[], tipos:[]}
 await knex('pokemon')
  .where('pokemon.id', id)
  .select('nombre', 'pokemon.id', 'peso', 'altura', 'descripcion', 'img', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd')
  .then((pokemon_array) => {
    return pokemonFinal['datos_pokemon'] = pokemon_array[0]
  })
  await knex
  .select("moves.nombre")
  .from("moves")
  .innerJoin("pokemoves", "moves.id", "pokemoves.moves_id")
  .innerJoin("pokemon", "pokemoves.pokemon_id", "pokemon.id")
  .where("pokemon.id", pokemonFinal.datos_pokemon.id)
  .then((movesOfPokemos) => {
    console.log(movesOfPokemos)
    movesOfPokemos.map((movimiento)=>{pokemonFinal.movimientos.push(movimiento)})
    return pokemonFinal
    })
    await knex
  .select("types.nombre")
  .from("types")
  .innerJoin("poketypes", "types.id", "poketypes.types_id")
  .innerJoin("pokemon", "poketypes.pokemon_id", "pokemon.id")
  .where("pokemon.id", pokemonFinal.datos_pokemon.id)
  .then((movesOfPokemos) => {
    console.log(movesOfPokemos)
    movesOfPokemos.map((tipo)=>{pokemonFinal.tipos.push(tipo)})
    return pokemonFinal
    })
    return pokemonFinal
}

const createPoke = (body) =>{
  return knex('pokemon')
   .insert(body)

}

const getUserByMail = (mail) =>{
  return knex('user')
    .where('mail', mail)
    .select('mail')

  } 

  const deleteUser = (mail) =>{
    return knex('user')
    .where('mail', mail)
    .del(body)
  }

// const updateUser = (id, body) =>{
//   return knex('pokemon')
//    .where('id', id)
//    .update(body)

// }


module.exports = {
    getAll,
    getPokeById,
    getUserByMail,
    createPoke,
    // updateUser,
    deleteUser
}