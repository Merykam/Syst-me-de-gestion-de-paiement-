const express = require('express');

const router = express.Router();

const appartementController = require('../conrollers/appartementController');


router.post('/addAppartement',appartementController.insertAppartement);



module.exports=router;