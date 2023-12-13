const express = require('express');

const router = express.Router();

const clientController = require('../conrollers/clientController');


router.post('/insertClient',clientController.insertClient);



module.exports=router;