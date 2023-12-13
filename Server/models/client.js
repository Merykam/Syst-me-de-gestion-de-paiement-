const mongoose = require('mongoose');

const clientShema = new mongoose.Schema({
    name:{
        type : String,
        trim:true,
        maxlength:50,
        required:true
    },
    CIN:{
        type : String,
        trim:true,
        maxlength:7,
        required:true,
      
    },
    phoneNumber:{
        type: String,
        required:true
    },

    isReside:{
        type : Boolean,
        default: true
    }
    
})

const Client = mongoose.model("Client",clientShema)


module.exports= Client