const validator = require('validator');
const Client = require('../models/client')

const insertClient = async (req,res)=>{
       
        const { name, CIN, phoneNumber} = req.body;

        console.log(req.body);

      

        if (!validator.isLength(name, { min: 1, max: 255 })) {
            return res.status(400).json({ error: 'Le nom est requis.' });
        }
    
        if (!validator.isLength(CIN, { min: 1, max: 8 })) {
            return res.status(400).json({ error: 'le CIN est requis' });
        }
    
        if (!validator.isLength(phoneNumber, { min: 10, max: 23 })) {
            return res.status(400).json({ error: 'Le numéro de téléphone doit avoir au moins 10 caractères.' });
        }

      

        try{

            const client = await Client.findOne({ CIN:CIN });
            

            if(client){
                res.status(400).res.json({err :"client already exists" });
          
            }
           
         

            const Newclient = new Client({
                name: req.body.name,
                CIN: req.body.CIN,
                phoneNumber: req.body.phoneNumber,
            
            });
    
            await Newclient.save();
        

            res.json({ success: Newclient, message: 'client added successfully' });

        }catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }

   }


const showClient = async(req,res)=>{

    const allCient = await Client.find()

    return res.status(200).json({ success: true, allCient: allCient })

}

module.exports={
  
    insertClient,
    showClient
   
};

