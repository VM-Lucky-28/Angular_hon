const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ishare');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',()=> console.log("Connected to Mongodb"));
 
 
module.exports={
    mongoose
}