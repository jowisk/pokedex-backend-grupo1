const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAll = () =>{
    return knex
      .column('nombre', 'id')
      .select('*')
      .from('pokemon')
      .join('pokemoves','pokemon_id','pokemon.id')
      .join('moves','id','pokemoves.pokemon_id')
           
}

const getPokeById = async (id) =>{
  let pokemonFinal = {datos_pokemon:{}, movimientos:{}}
    await knex('pokemon')
      .where('id', id)
      .select('nombre', 'id', 'peso', 'altura', 'descripcion', 'img', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd')
  	.then((pokemon_array) => {
      return pokemonFinal['datos_pokemon'] = pokemon_array[0]
    })
     knex
    .select("moves.nombre")
    .from("moves")
    .innerJoin("pokemoves", "moves.id", "pokemoves.moves_id")
    .innerJoin("pokemon", "pokemoves.pokemon_id", "pokemon.id")
    .where("pokemon.id", pokemonFinal.datos_pokemon.id)
    .then((movesOfPokemos) => {
      return pokemonFinal['movimientos'] = movesOfPokemos
      console.log(movesOfPokemos)
    });

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