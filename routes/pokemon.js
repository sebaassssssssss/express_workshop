const express = require('express');
const pokemon = express.Router();
const db = require('../config/database')

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body);    
});
    
pokemon.get("/", async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});
    
pokemon.get('/:id([0-9]{1,3})', async (req, res, next) => {
        const pkmnid = await db.query("SELECT * FROM pokemon");
        const id = req.params.id -1;
        (id >= 0 && id <= 150) ? res.status(200).send(pkmnid[req.params.id - 1]) : res.status(404).send("Pokemon no encontrado.");
        
        
});
    
pokemon.get('/:name([A-Za-z]+)', async (req, res, next) => {
        
        //const name = req.params.name;
        const pkmnName = await db.query("SELECT * FROM pokemon")
        const pkmn = pkmnName.filter((p) => {
        //return (p.pkmnName.toUpperCase() == pkmn.toUpperCase()) && p;
        return (p.pkmn.toUpperCase() == pkmn.toUpperCase()) && p;   
    })
    
    if(pk.length > 0) {
        return res.status(200).send(pkmnName);
    }
    return res.status(404).send("Pokemon no encontrado.")
});

module.exports = pokemon;