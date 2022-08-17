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
    {id: 1, nombre: 'fuego'}, //Chimchar.
    {id: 2, nombre: 'hielo'}, //Snover.
    {id: 3, nombre: 'planta'}, //Turtwig, Torterra.
    {id: 4, nombre: 'agua'}, //Piplup, Empoleon.
    {id: 5, nombre: 'roca'}, //Shieldon, Bastiodon.
    {id: 6, nombre: 'tierra'}, //Hippopotas, Hippowdon.
    {id: 7, nombre: 'acero'}, //Bronzor, Bronzong.
    {id: 8, nombre: 'lucha'}, //Riolu, Lucario.
    {id: 9, nombre: 'fantasma'}, //Driflon, Drifblim
    {id: 10, nombre: 'psiquico'}, //Uxie, Mesprit.
    {id: 11, nombre: 'veneno'}, //Croagunk, Toxicroak.
    {id: 12, nombre: 'siniestro'}, //Darkrai, weavile.
    {id: 13, nombre: 'volador'}, //Starly, Staraptor.
    {id: 14, nombre: 'dragon'}, //Gible, Garchomp.
    {id: 15, nombre: 'bicho'}, //Kricketot, Kricketune.
    {id: 16, nombre: 'electrico'}, //Shinx, Luxray.
    {id: 17, nombre: 'normal'}, //Bidof, Bibarel.
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
    {id: 2, nombre: 'Staraptor', peso: '10', altura: '1.50', descripcion: 'Desc de Staraptor', img: 'https://static.wikia.nocookie.net/espokemon/images/1/1f/Staraptor.png/revision/latest?cb=20100103095451', hp: '2', atk: '2', def: '2', satk: '2', sdef: '2', spd: '2'},
    {id: 3, nombre: 'Infernape', peso: '15', altura: '2', descripcion: 'Desc del mejor pokimon de la historia', img: 'https://static.wikia.nocookie.net/espokemon/images/1/17/Infernape.png/revision/latest/scale-to-width-down/1000?cb=20151017104012', hp: '3', atk: '3', def: '3', satk: '3', sdef: '3', spd: '3'},
  ]);

  await knex('pokemoves').insert([
    {}
    
  ]);

  }