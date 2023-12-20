const validator = require('validator');
const Appartement = require('../models/appartement')
const client = require('../models/client')

const insertAppartement = async (req,res)=>{
       
        const { name, description, prixParMois, surface, nombrePieces, adresse, status, clientId} = req.body;

      

        if (!validator.isLength(name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: 'Le nom est requis.' });
        }
    
        if (!validator.isLength(description, { min: 1, max: 600 })) {
            return res.status(400).json({ error: 'la description est requis' });
        }
        // if (!validator.isLength(prixParMois, { min: 1, max: 8 })) {
        //     return res.status(400).json({ error: 'le prix est requis' });
        // }
        // if (!validator.isLength(surface, { min: 1, max: 8 })) {
        //     return res.status(400).json({ error: 'la surface est requis' });
        // }
        // if (!validator.isLength(nombrePieces, { min: 1, max: 8 })) {
        //     return res.status(400).json({ error: 'le nombre de pieces est requis' });
        // }
        if (!validator.isLength(adresse, { min: 1, max: 150 })) {
            return res.status(400).json({ error: 'Adress est requis' });
        }
        if (!validator.isLength(status, { min: 1, max: 8 })) {
            return res.status(400).json({ error: 'le status est requis' });
        }
       
       

      
        try {
            const appartName = await Appartement.findOne({ name :name });
            
            const client1 = await client.findOne({ name :clientId });
            const existingAppartement = await Appartement.findOne({ adresse : adresse});
        
            if (existingAppartement || appartName) {
                return res.status(400).json({ err: "This appartement already exists" });
            }
            console.log(client1);

        
            if (!client1) {
                

                const newAppartement = new Appartement({
                    name: req.body.name,
                    description: req.body.description,
                    prixParMois: req.body.prixParMois,
                    surface: req.body.surface,
                    nombrePieces: req.body.nombrePieces,
                    adresse: req.body.adresse,
                    status: req.body.status,
                    clientId: null,
                });


                
            await newAppartement.save();
        
            return res.json({ success: newAppartement, message: 'Appartement added successfully' });
            }
        
            const clientId1 = client1._id;
        
           
        
            const newAppartement = new Appartement({
                name: req.body.name,
                description: req.body.description,
                prixParMois: req.body.prixParMois,
                surface: req.body.surface,
                nombrePieces: req.body.nombrePieces,
                adresse: req.body.adresse,
                status: req.body.status,
                clientId: clientId1,
            });
        
            await newAppartement.save();
        
            return res.json({ success: newAppartement, message: 'Appartement added successfully' });
        
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        

   }


const showAppartement = async(req,res)=>{

    const allApartementsWithHisClients = await Appartement.find().populate({
        path: "clientId",
        module: "client",
        select: "name"
    })

    return res.status(200).json({ success: true, appartements: allApartementsWithHisClients })

}
const editAppartement = async(req,res)=>{
    const id = req.query.id;
    const appartementData = await Appartement.find({_id:id}).populate({
        path: "clientId",
        module: "client",
        select: "name"
    })
    return res.status(200).json({ success: true, appartementData: appartementData })

}

const updateAppartement = async (req,res)=>{

    const appartementID= req.query.id
  console.log("id for appart " , appartementID);
    const { name, description, prixParMois, surface, nombrePieces, adresse, status, clientId} = req.body;
    try{
        // console.log("hello");
        // const existingAppartement = await Appartement.findOne({ adresse : adresse});
        // const appartName = await Appartement.findOne({name :name});
        // const findId = await Appartement.findOne({_id:id})
     

        // if (!findId && (existingAppartement || appartName)) {
        //     return res.status(400).json({ err: "This appartement already exists" });
        // }

        const client1 = await client.findOne({ name :clientId });
       



        if (!client1) {
                
        const updateAppartement =await Appartement.findByIdAndUpdate(
            {_id :appartementID},
            {
            name: req.body.name,
            prixParMois: req.body.prixParMois,
            surface: req.body.surface,
            nombrePieces: req.body.nombrePieces,
            adresse: req.body.adresse,
            status: req.body.status,
            clientId: null,
        },  {new:true});
     

        return res.json({ success: updateAppartement, message: 'Appartement updated successfully' });
            
        }
        const clientId1 = client1._id;

        const updateAppartement =await Appartement.findByIdAndUpdate(
            {_id :appartementID},
            {
            name: req.body.name,
            prixParMois: req.body.prixParMois,
            surface: req.body.surface,
            nombrePieces: req.body.nombrePieces,
            adresse: req.body.adresse,
            status: req.body.status,
            clientId: clientId1,
        },  {new:true});
     

        return res.json({ success: updateAppartement, message: 'Appartement updated successfully' });

    }catch(error){
        return res.status(500).json({ success: false, error: error.message });
    }

    
}

module.exports={
  
    insertAppartement,
    showAppartement,
    updateAppartement,
    editAppartement
   
};

