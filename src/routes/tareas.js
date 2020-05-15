const router = require('express').Router(); 

router.get('/task', (req, res) => {
    res.render('../views/task/task.html', {title: 'Tareas'});
});

module.exports = router;