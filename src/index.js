const express = require('express');
const logger = require('morgan')
const path = require('path');
const methodOverride = require('method-override');
const session = require ('express-session');

// Inicializadores
const app = express();
require('./database');

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

// Variables Globales

// Rutas
app.use(require('./routes/index'));
app.use(require('./routes/tareas'));
app.use(require('./routes/app'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})

// npm run dev