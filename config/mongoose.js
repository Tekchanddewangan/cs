const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://tekchand:0000@cluster0.kvuuo2u.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
