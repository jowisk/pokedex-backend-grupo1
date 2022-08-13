/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemoves').del()
  await knex('poketypes').del()
  await knex('pokemon').del()
  await knex('moves').del()
  await knex('types').del()

  await knex('types').insert([
    {id: 1, nombre: 'fuego'},
    {id: 2, nombre: 'hielo'},
    {id: 3, nombre: 'planta'},
    {id: 4, nombre: 'agua'},
    {id: 5, nombre: 'roca'},
    {id: 6, nombre: 'tierra'},
    {id: 7, nombre: 'acero'},
    {id: 8, nombre: 'lucha'},
    {id: 9, nombre: 'fantasma'},
    {id: 10, nombre: 'psiquico'},
    {id: 11, nombre: 'veneno'},
    {id: 12, nombre: 'siniestro'},
    {id: 13, nombre: 'volador'},
    {id: 14, nombre: 'dragon'},
    {id: 15, nombre: 'bicho'},
    {id: 16, nombre: 'electrico'},
    {id: 17, nombre: 'normal'},
  ]);

  await knex('moves').insert([
    {id: 1, nombre: 'Fogonazo'},
    {id: 2, nombre: 'Ascuas'},
    {id: 3, nombre: 'Hielofuria'},
    {id: 4, nombre: 'Ventisca'},
    {id: 5, nombre: 'Hoja magica'},
    {id: 6, nombre: 'Esporas'},
    {id: 7, nombre: 'Placaje'},
    {id: 8, nombre: 'Surf'},
    {id: 9, nombre: 'Escaldar'},
    {id: 10, nombre: 'Golpe roca'},
    {id: 11, nombre: 'Antiaereo'},
    {id: 12, nombre: 'Terremoto'},
    {id: 13, nombre: 'Espinas'},
    {id: 14, nombre: 'Garra metal'},
    {id: 15, nombre: 'Bomba magnetica'},
    {id: 16, nombre: 'Puntapie'},
    {id: 17, nombre: 'Ultrapuño'},
    {id: 18, nombre: 'Fuerza fantasmal'},
    {id: 19, nombre: 'Pesadilla'},
    {id: 20, nombre: 'Mordisco'},
    {id: 21, nombre: 'Psiquico'},
    {id: 22, nombre: 'Volar'},
    {id: 23, nombre: 'Tajo aereo'},
    {id: 24, nombre: 'Aliento de dragon'},
    {id: 25, nombre: 'Cola de dragon'},
    {id: 26, nombre: 'Drenadoras'},
    {id: 27, nombre: 'Pin misil'},
    {id: 28, nombre: 'Carga'},
    {id: 29, nombre: 'Rayo'},
    {id: 30, nombre: 'Corte'},
    {id: 31, nombre: 'Placaje'},
  ]);

  await knex('pokemon').insert([
    {id: 1, nombre: 'Charmander', peso: '5', altura: '1.05', descripcion: 'Desc de charmander', img: 'https://static.wikia.nocookie.net/espokemon/images/5/56/Charmander.png/revision/latest?cb=20140207202456', hp: '1', atk: '1', def: '1', satk: '1', sdef: '1', spd: '1'},
  ]);




  }