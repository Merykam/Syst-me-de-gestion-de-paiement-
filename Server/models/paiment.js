const mongoose = require('mongoose');

const paimentAppartement = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
      },
    appartementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appartement'
    },
    date:{
        type: Date,
        required:true,
    },
    prixParMois:{
        type: Number,
        integer: true,
        required:true,
    },

    
})

const Paiment = mongoose.model("Paiment",paimentAppartement)


module.exports= Paiment