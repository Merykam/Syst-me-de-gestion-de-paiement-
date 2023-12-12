const express = require('express');

const router = express.Router();

const userController = require('../conrollers/authController');


router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
router.get('/signout',userController.signout);
router.get('/activate/:token',userController.verifyEmail);


module.exports=router;