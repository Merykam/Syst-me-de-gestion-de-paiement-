const express = require('express');

const router = express.Router();

const paimentController= require('../conrollers/paimentController');


router.post('/insertPaiment',paimentController.insertPaiment);
router.get('/showPaiments',paimentController.showPaiments);
router.get('/showPaiment',paimentController.showPaiment);



module.exports=router;