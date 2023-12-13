const mongoose = require('mongoose');

const appartementShema = new mongoose.Schema({
    name:{
        type : String,
        trim:true,
        maxlength:50,
        required:true
    },

    description:{
        type : String,
        trim:true,
        maxlength:800,
        required:true
    },

    prixParMois:{
        type : Number,
        trim:true,
        maxlength:50,
        required:true
    },

    surface:{
        type: Number,
        integer: true,
        required:true,
      
    },
    nombrePieces :{
        type: Number,
        integer: true,
        required:true,
    },
    adresse:{
        type: String,
        required:true
    },

    status:{
        type : String,
        default: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        default: null
      },
})

const Appartement = mongoose.model("Appartement",appartementShema)


module.exports= Appartement