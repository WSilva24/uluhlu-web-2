const router = require('express').Router(); 

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Uluhlu'});
});

router.get('/comingsoon', (req, res) => {
    res.render('comingsoon.html', {title: 'Próximamente'});
});

module.exports = router;