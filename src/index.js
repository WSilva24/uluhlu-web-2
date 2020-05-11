const express = require('express'); 
const app = express();
const path = require('path');

// Configuración
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares

// Rutas
app.use(require('./routes/index'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Escuchando al servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})

// npm run dev