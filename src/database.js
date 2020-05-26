const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/uluhlu-app', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// })
// .then(db => console.log('DB Conectada'))
// .catch(err => console.error(err));

let db;

module.exports = function Connection() {
    if (!db) {
        db = mongoose.createConnection('mongodb://localhost/uluhlu-app', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    }
    return db;
}