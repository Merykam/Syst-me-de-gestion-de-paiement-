const validator = require('validator');
const Paiment = require('../models/paiment')
const client = require('../models/client')
const Appartement = require('../models/appartement')

const insertPaiment = async (req,res)=>{
       
        const { appartementId, date, prixParMois} = req.body;

      
        if (!validator.isLength(appartementId, { min: 1, max: 600 })) {
            return res.status(400).json({ error: 'Appartement est requis' });
        }
     

      
        try {
            // const client1 = await client.findOne({ name :clientId });
            // console.log(client1);
        
            // if (!client1) {
            //     return res.status(400).json({ err: "This client doesn't exist" })
            // }
        
            // const clientId1 = client1._id;
        
            const Appartement1 = await Appartement.findOne({ name : appartementId });
        
            if (!Appartement1) {
                return res.status(400).json({ err: "This appartement doesn't exist" });
            }

            const paimentId1 = Appartement1._id;
            const clientId1 = Appartement1.clientId;
        
            const newPaiment = new Paiment({
                clientId: clientId1,
                appartementId: paimentId1,
                date:date,
                prixParMois:prixParMois
             
            });
        
            await newPaiment.save();
        
            return res.json({ success: newPaiment, message: 'Paiment added successfully' });
        
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        

   }


const showPaiment = async(req,res)=>{
    const id1 = req.params.id1;
    console.log(id1);
    const findResideClient = await Appartement.findOne({_id:id1});
    console.log(findResideClient);
    const idClient = findResideClient.clientId;
    const appartementPaiments = await Paiment.find({appartementId:id1,clientId:idClient}).populate({
        path: "clientId",
        module: "client",
        select: "name"
    }).populate({
        path: "appartementId",
        module: "Appartement",
        select: "name"
    })

    return res.status(200).json({ success: true, appartementPaiments: appartementPaiments })

}

module.exports={
  
    insertPaiment,
    showPaiment
   
};

