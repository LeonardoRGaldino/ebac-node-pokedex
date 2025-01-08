const express = require('express');
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const { connect } = require('./models');
const pokemonsRouter = require('./routes/pokemons');
const app = express();


// configurando EJS

app.set('views', path.join(__dirname, 'views'));

// Definindo subpastas dinamicamente nas rotas

app.get('/pokemons', (req, res) => {
  res.render('paginas/pokemons/index');  // O Express procura a view em 'views/paginas/pokemons/index.ejs'
});

app.set('layout', 'index'); // 1º define o objeto, 2º o local.

app.set('view engine', 'ejs');
app.use(expressLayouts);




// declarando rotas
app.use('/pokemons', pokemonsRouter)


const porta = 3000;
app.listen(porta, () => {
    connect();

    console.log(`servidor ouvindo na porta ${porta}`)
})