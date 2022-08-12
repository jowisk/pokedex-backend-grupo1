const express = require('express');
const pokeQueries = require('../controllers/pokemons')
const userQueries = require('../controllers/user')
const router = express.Router();

// para todos los pokemons
router.get('/', async (req, resp) =>{
    const pokemons = await pokeQueries.getAll();
    console.log('pokemons:', pokemons)
    resp.json(pokemons)
});

// para un solo pokemon
router.get('/:id', async (req, resp) =>{
    const id = req.params.id;
    const poke = await pokeQueries.getPokeById(id);
    resp.json(poke)
});

// para crear un pokemon
router.post('/crear', async (req, resp) =>{
    const body = req.body;
    const newPoke = await pokeQueries.createPoke(body);
    resp.json(newPoke)
});

router.post('/login', async (req, resp) =>{
    const body = req.body
    const newPoke = await pokeQueries.createPoke(body);
    resp.json(newPoke)
});

// // para actualizar un usuario
// router.put('/:id', async(req, resp) =>{
//     const id = req.params.id;
//     const body = req.body;
//     const updateItem = await userQueries.updateUser(id, body)
//     resp.json(updateItem)
// });

// // para eliminar un usuario 
// router.delete('/:id', async (req, resp) =>{
//     const id = req.params.id;
//     const deletedUser = await userQueries.deleteUser(id)
//     resp.json(deletedUser)
// });




module.exports = router