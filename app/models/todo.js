var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
   title: String, 
   publisher: String,
   platform: String,
   year: Number,
   likes: Number, 
   comments: [ 
      {
         user:String,
         message: String,
         dateCreated: String,
         like: Number 
      }
   ]
},
{ collection : 'gameCollection' });
module.exports = mongoose.model('game',gameSchema);