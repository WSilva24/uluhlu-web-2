const router = require('express').Router(); 

router.get('/app', (req, res) => {
    res.render('../views/app/app.html', {title: 'App'});
});

module.exports = router;