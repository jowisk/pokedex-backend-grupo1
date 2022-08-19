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
    {id: 3, nombre: 'planta'}, //Turtwig.
    {id: 4, nombre: 'agua'}, //Piplup.
    {id: 5, nombre: 'roca'}, //Shieldon. 
    {id: 6, nombre: 'tierra'}, //Hippopotas.
    {id: 7, nombre: 'acero'}, //Bronzor.
    {id: 8, nombre: 'lucha'}, //Riolu.
    {id: 9, nombre: 'fantasma'}, //Driflon.
    {id: 10, nombre: 'psiquico'}, //Uxie.
    {id: 11, nombre: 'veneno'}, //Croagunk.
    {id: 12, nombre: 'siniestro'}, //Darkrai.
    {id: 13, nombre: 'volador'}, //Starly.
    {id: 14, nombre: 'dragon'}, //Gible.
    {id: 15, nombre: 'bicho'}, //Kricketot.
    {id: 16, nombre: 'electrico'}, //Shinx.
    {id: 17, nombre: 'normal'}, //Bidof.
  ]);

  await knex('moves').insert([
    {id: 1, nombre: 'Fogonazo'},//chimchar
    {id: 2, nombre: 'Ascuas'},

    {id: 3, nombre: 'Hielofuria'},//snover
    {id: 4, nombre: 'Ventisca'},

    {id: 5, nombre: 'Hoja magica'},//turt
    {id: 6, nombre: 'Esporas'},

    {id: 7, nombre: 'Marea'},//piplup
    {id: 8, nombre: 'Surf'},

    {id: 9, nombre: 'Pedrada'},//Shieldon
    {id: 10, nombre: 'Golpe roca'},

    {id: 11, nombre: 'Antiaereo'},//Hippopotas
    {id: 12, nombre: 'Terremoto'},

    {id: 13, nombre: 'Armadura acero'},//Bronzor
    {id: 14, nombre: 'Garra metal'},

    {id: 15, nombre: 'Utrapuño'},//Riolu
    {id: 16, nombre: 'Puntapie'},

    {id: 17, nombre: 'Hojas oscuras'},//Driflon
    {id: 18, nombre: 'Fuerza fantasmal'},

    {id: 19, nombre: 'Pesadilla'},//Uxie
    {id: 20, nombre: 'Psiquico'},

    {id: 21, nombre: 'Toxico'},//Croagunk
    {id: 22, nombre: 'Puas'},

    {id: 23, nombre: 'Bomba oscura'},//Darkrai
    {id: 24, nombre: 'Persecución'},

    {id: 25, nombre: 'Tajo Aereo'},//Starly
    {id: 26, nombre: 'Volar'},

    {id: 27, nombre: 'Aliento Dragon'},////Gible
    {id: 28, nombre: 'Cola dragon'},

    {id: 29, nombre: 'Drenadoras'},//Krikcketoto
    {id: 30, nombre: 'Pin misil'},

    {id: 31, nombre: 'Descarga'},//Shinx
    {id: 32, nombre: 'Rayo'},

    {id: 33, nombre: 'Corte'},//Bidof
    {id: 34, nombre: 'Placaje'},
  ]);

  await knex('pokemon').insert([
    {id: 1, nombre: 'Chimchar', peso: '5', altura: '1.05', descripcion: 'Monito con la capacidad de dominar el fuego, muy amigable con sus maestros pokemon', img: 'https://static.wikia.nocookie.net/espokemon/images/9/9f/Chimchar.png/revision/latest?cb=20120927233211', hp: '500', atk: '21', def: '24', satk: '20', sdef: '25', spd: '40'},
    {id: 2, nombre: 'Snover', peso: '25', altura: '1.60', descripcion: 'Este pokemon parece un arbolito, pero ten cuidado, es frio como el hielo.', img: 'https://static.wikia.nocookie.net/espokemon/images/0/09/Snover.png/revision/latest?cb=20080415190910', hp: '600', atk: '15', def: '35', satk: '26', sdef: '24', spd: '30'},
    {id: 3, nombre: 'Turtwig', peso: '6', altura: '0.50', descripcion: 'Sus dientes pueden perforar el acero mas duro.', img: 'https://static.wikia.nocookie.net/espokemon/images/c/c8/Turtwig.png/revision/latest/scale-to-width-down/350?cb=20151017105732', hp: '550', atk: '20', def: '25', satk: '28', sdef: '30', spd: '25'},
    {id: 4, nombre: 'Piplup', peso: '5', altura: '1.10', descripcion: 'Pinguino con muy malas pulgas, es capaz de escupir rayos burbuja muy potentes.', img: 'https://static.wikia.nocookie.net/espokemon/images/1/11/Piplup.png/revision/latest?cb=20120927233336', hp: '480', atk: '15', def: '24', satk: '30', sdef: '18', spd: '35'},
    {id: 5, nombre: 'Shieldon', peso: '30', altura: '0.40', descripcion: 'Posee un caparazon tan duro que ni un diamante puede perforar.', img: 'https://static.wikia.nocookie.net/espokemon/images/5/57/Shieldon.png/revision/latest?cb=20080715135936', hp: '700', atk: '20', def: '40', satk: '15', sdef: '45', spd: '20'},
    {id: 6, nombre: 'Hippopotas', peso: '90', altura: '1', descripcion: 'Al caminar este pokemon de tierra va soltando arenisca por donde va.', img: 'https://static.wikia.nocookie.net/espokemon/images/9/96/Hippopotas.png/revision/latest?cb=20080911163440', hp: '850', atk: '25', def: '45', satk: '20', sdef: '35', spd: '20'},
    {id: 7, nombre: 'Bronzor', peso: '40', altura: '0.50', descripcion: 'Tiene forma de plato, pero sus poderes psiquicos te pueden desmayar muy rapido.', img: 'https://static.wikia.nocookie.net/espokemon/images/1/19/Bronzor.png/revision/latest/scale-to-width-down/350?cb=20170615201530', hp: '650', atk: '21', def: '45', satk: '35', sdef: '30', spd: '26'},
    {id: 8, nombre: 'Riolu', peso: '16', altura: '1.20', descripcion: 'Es chiquito, pero riñe y pelea como todo un gran pokemon de lucha.', img: 'https://static.wikia.nocookie.net/espokemon/images/f/f0/Riolu.png/revision/latest?cb=20080911163138', hp: '450', atk: '30', def: '24', satk: '20', sdef: '20', spd: '37'},
    {id: 9, nombre: 'Driflon', peso: '0.50', altura: '1.70', descripcion: 'El aire que conserva dentro de él lo ayuda a relagarse mientras flota con calma.', img: 'https://static.wikia.nocookie.net/espokemon/images/2/29/Drifloon.png/revision/latest/scale-to-width-down/350?cb=20170617011344', hp: '450', atk: '18', def: '15', satk: '40', sdef: '20', spd: '30'},
    {id: 10, nombre: 'Uxie', peso: '8', altura: '0.90', descripcion: 'Legendario pokemon de la region de Sinnoh, tiene un poder increible.', img: 'https://static.wikia.nocookie.net/espokemon/images/e/e5/Uxie.png/revision/latest/scale-to-width-down/350?cb=20141113220128', hp: '600', atk: '23', def: '36', satk: '45', sdef: '40', spd: '35'},
    {id: 11, nombre: 'Croagunk', peso: '15', altura: '1.25', descripcion: 'Esta ranita posee altas cantidades de veneno en su piel.', img: 'https://static.wikia.nocookie.net/espokemon/images/1/1a/Croagunk.png/revision/latest/scale-to-width-down/350?cb=20170615205826', hp: '500', atk: '33', def: '30', satk: '36', sdef: '20', spd: '31'},
    {id: 12, nombre: 'Darkrai', peso: '40', altura: '1.75', descripcion: 'Tan peligroso como su excepcional estilo.', img: 'https://static.wikia.nocookie.net/espokemon/images/5/50/Darkrai.png/revision/latest/scale-to-width-down/350?cb=20150214164357', hp: '750', atk: '35', def: '40', satk: '30', sdef: '40', spd: '40'},
    {id: 13, nombre: 'Starly', peso: '10', altura: '0.50', descripcion: 'Los Starly dejan su nido muy rapido, es por eso que sus evoluciones son tan independientes y fuertes.', img: 'https://static.wikia.nocookie.net/espokemon/images/0/08/Starly.png/revision/latest?cb=20080715122429', hp: '450', atk: '25', def: '18', satk: '20', sdef: '25', spd: '25'},
    {id: 14, nombre: 'Gible', peso: '15', altura: '2', descripcion: 'Pequeño dragoncito que no deja de mordisquear todo.', img: 'https://static.wikia.nocookie.net/espokemon/images/3/37/Gible.png/revision/latest/scale-to-width-down/350?cb=20151017104724', hp: '590', atk: '37', def: '40', satk: '20', sdef: '30', spd: '35'},
    {id: 15, nombre: 'Kricketot', peso: '15', altura: '2', descripcion: 'Desde tempranas edades empiezan a aprender a pelear.', img: 'https://static.wikia.nocookie.net/espokemon/images/d/df/Kricketot.png/revision/latest?cb=20080715135648', hp: '3', atk: '3', def: '3', satk: '3', sdef: '3', spd: '3'},
    {id: 16, nombre: 'Shinx', peso: '12', altura: '0.60', descripcion: 'Conserva altas cargas de electricidad por su cuerpo, es peligroso tomarlos en brazos cuando no se tiene conocimiento de esto.', img: 'https://static.wikia.nocookie.net/espokemon/images/a/a5/Shinx.png/revision/latest/scale-to-width-down/350?cb=20150828153514', hp: '400', atk: '20', def: '29', satk: '36', sdef: '25', spd: '38'},
    {id: 17, nombre: 'Bidof', peso: '15', altura: '0.80', descripcion: 'Suele cavar agujeros donde se esconde del mal tiempo.', img: 'https://static.wikia.nocookie.net/espokemon/images/b/b9/Bidoof.png/revision/latest?cb=20080715135210', hp: '300', atk: '15', def: '20', satk: '10', sdef: '8', spd: '15'},
  ]);

  await knex('pokemoves').insert([
    {moves_id: '1', pokemon_id: '1'},
    {moves_id: '2', pokemon_id: '1'},
    {moves_id: '3', pokemon_id: '2'},
    {moves_id: '4', pokemon_id: '2'},
    {moves_id: '5', pokemon_id: '3'},
    {moves_id: '6', pokemon_id: '3'},
    {moves_id: '7', pokemon_id: '4'},
    {moves_id: '8', pokemon_id: '4'},
    {moves_id: '9', pokemon_id: '5'},
    {moves_id: '10', pokemon_id: '5'},
    {moves_id: '11', pokemon_id: '6'},
    {moves_id: '12', pokemon_id: '6'},
    {moves_id: '13', pokemon_id: '7'},
    {moves_id: '14', pokemon_id: '7'},
    {moves_id: '16', pokemon_id: '8'},
    {moves_id: '17', pokemon_id: '9'},
    {moves_id: '18', pokemon_id: '9'},
    {moves_id: '19', pokemon_id: '10'},
    {moves_id: '20', pokemon_id: '10'},
    {moves_id: '21', pokemon_id: '11'},
    {moves_id: '22', pokemon_id: '11'},
    {moves_id: '23', pokemon_id: '12'},
    {moves_id: '24', pokemon_id: '12'},
    {moves_id: '25', pokemon_id: '13'},
    {moves_id: '26', pokemon_id: '13'},
    {moves_id: '27', pokemon_id: '14'},
    {moves_id: '28', pokemon_id: '14'},
    {moves_id: '29', pokemon_id: '15'},
    {moves_id: '30', pokemon_id: '15'},
    {moves_id: '31', pokemon_id: '16'},
    {moves_id: '32', pokemon_id: '16'},
    {moves_id: '33', pokemon_id: '17'},
    {moves_id: '34', pokemon_id: '17'},
  ]);

  await knex('poketypes').insert([
    {types_id: '1', pokemon_id: '1'},
    {types_id: '2', pokemon_id: '2'},
    {types_id: '3', pokemon_id: '2'},
    {types_id: '3', pokemon_id: '3'},
    {types_id: '4', pokemon_id: '4'},
    {types_id: '5', pokemon_id: '5'},
    {types_id: '7', pokemon_id: '5'},
    {types_id: '6', pokemon_id: '6'},
    {types_id: '5', pokemon_id: '6'},
    {types_id: '7', pokemon_id: '7'},
    {types_id: '8', pokemon_id: '8'},
    {types_id: '9', pokemon_id: '9'},
    {types_id: '12', pokemon_id: '9'},
    {types_id: '10', pokemon_id: '10'},
    {types_id: '11', pokemon_id: '11'},
    {types_id: '8', pokemon_id: '11'},
    {types_id: '12', pokemon_id: '12'},
    {types_id: '13', pokemon_id: '13'},
    {types_id: '17', pokemon_id: '13'},
    {types_id: '14', pokemon_id: '14'},
    {types_id: '6', pokemon_id: '14'},
    {types_id: '15', pokemon_id: '15'},
    {types_id: '8', pokemon_id: '15'},
    {types_id: '16', pokemon_id: '16'},
    {types_id: '17', pokemon_id: '17'},
  ]);
  }