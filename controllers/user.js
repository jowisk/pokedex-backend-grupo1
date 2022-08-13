const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

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









    
    module.exports = {
        getUserByMail,
        deleteUser
    }