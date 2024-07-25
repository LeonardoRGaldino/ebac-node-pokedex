const express = require('express');
const { connect } = require('./models');

const pokemonRouter = require('./routes/pokemon');

const app = express();


// declarando rotas
app.use('/pokemon', pokemonRouter)

app.listen(3000, () => {
    connect();

    console.log(`servidor ouvindo na porta ${porta}`)
})