module.exports = function () {
    
    var db = require('../database')();
    var Schema = require('mongoose').Schema;

    var Tarea = Schema({
        tarea: String,
        status: Boolean,
    });

    return db.model('tareas', Tarea);

}
