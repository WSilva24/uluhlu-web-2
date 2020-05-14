const router = require('express').Router(); 

router.get('/task', (req, res) => {
    res.send('Tareas');
});

module.exports = router;