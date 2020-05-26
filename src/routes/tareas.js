const router = require('express').Router(); 

const model = require('../models/tarea')();

router.get('/task', (req, res) => {
    model.find({}, (err, tareas) => {
        if (err) throw err;
        res.render('../views/task/task.html', {
            title: 'Tareas',
            tareas: tareas
        });
    })
});

router.post('/add', (req, res) => {
    let body = req.body;
    body.status = false;

    model.create(body, (err, tarea) => {
        if (err) throw err;
        res.redirect('/task');
    })

    // console.log(body);

});



module.exports = router;