const router = require('express').Router(); 

router.get('/users/signin', (req, res) => {
    res.send('Ingresa a Uluhlu');
});

router.get('/users/signup', (req, res) => {
    res.send('Regístrate en Uluhlu');
});

module.exports = router;