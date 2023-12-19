const express = require('express');

const router = express.Router();

const appartementController = require('../conrollers/appartementController');


router.post('/addAppartement',appartementController.insertAppartement);
router.get('/showAppartement',appartementController.showAppartement);
router.get('/editAppartement',appartementController.editAppartement);
router.post('/updateAppartement',appartementController.updateAppartement);


module.exports=router;