const router = require('express').Router(); 

router.get('/users/signin', (req, res) => {
    res.render('../views/users/signin.html', {title: 'Sign in'});
});

router.get('/users/signup', (req, res) => {
    res.render('../views/users/signup.html', {title: 'Sign up'});
});

module.exports = router;