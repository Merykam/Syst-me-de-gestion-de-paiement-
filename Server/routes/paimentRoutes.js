const express = require('express');

const router = express.Router();

const clientController = require('../conrollers/paimentController');


router.post('/insertPaiment',clientController.insertPaiment);



module.exports=router;