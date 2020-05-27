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

router.get('/listar_tareas', async (req, res) => {
    const tareas = await model.find({}).sort('sorting');
    res.json(tareas);
    // model.find({}, (err, tareas) => {
    //     res.json(tareas);
    // })
});

router.post('/guardar_tarea', (req, res) => {
    // console.log(req.body);

    let body = req.body;
    const { tarea } = req.body;


    body.tarea = tarea;
    body.status = false;

    model.create(body)

    res.send('Tarea Recibida')
});

router.put('/tarea/:id', async (req, res) => {
    // console.log(req.params, req.body);

    const { id } = req.params;
    const { tarea } = req.body;

    const task = await model.findById(id);
    task.tarea = tarea;
    task.save();

    res.json('recibido');
});

router.delete('/tarea/:id', async (req, res) => {
    const { id } = req.params;
    const task = await model.remove({_id: id});
    res.json('borrado');
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