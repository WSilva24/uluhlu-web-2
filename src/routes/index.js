const router = require('express').Router(); 

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Uluhlu'});
});

router.get('/comingsoon', (req, res) => {
    res.render('comingsoon.html', {title: 'Próximamente'});
});

router.get('/signin', (req, res) => {
    res.render('signin.html', {title: 'Sign in'});
});

router.get('/signup', (req, res) => {
    res.render('signup.html', {title: 'Sign up'});
});

module.exports = router;