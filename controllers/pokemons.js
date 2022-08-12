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



const getPokeById = (id) =>{
    return knex('pokemon')
      .where('id', id)
      .select('nombre', 'id', 'peso', 'altura', 'descripcion', 'img', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd')

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