const express = require('express');

const router = express.Router();

const appartementController = require('../conrollers/appartementController');

const authenticateJWT = require('../middelwares/tokenMiddleware')


router.post('/addAppartement',authenticateJWT,appartementController.insertAppartement);
router.get('/showAppartement',authenticateJWT,appartementController.showAppartement);
router.get('/editAppartement',authenticateJWT,appartementController.editAppartement);
router.post('/updateAppartement',authenticateJWT,appartementController.updateAppartement);
router.get('/rentedAppartements',authenticateJWT,appartementController.showRentedAppartements);
router.post('/deleteAppartement',appartementController.deleteAppartement);


module.exports=router;