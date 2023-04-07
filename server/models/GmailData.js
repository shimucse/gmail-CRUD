const mongoose = require('mongoose')

const GmailSchema = new mongoose.Schema({

    email:{
     type   : String,
    required:true
    },
    UserName:{
        type:String,
        required:true
    }
})
const Gmail = mongoose.model('Gmail',GmailSchema);
module.exports = Gmail