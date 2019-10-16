const express = require('express');

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "nome": "Guilherme", "email": "guimaccali@gmail.com" } 

const server = express();

server.get('/users/:id', (req, res) => {
    const { id } = req.params;

    return res.json({ message: `Buscando o usuário ${id}`})
})

server.listen(3000);