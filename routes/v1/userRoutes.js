const express = require('express');
const authenticate = require('../../middleware/auth.js')
const  userController  = require('../../controllers/index.js');

const userRoute = express.Router();

userRoute.get('/ping',   userController.pingUserController);

userRoute.post('/register', userController.registerController);

userRoute.post('/login', userController.loginController);

userRoute.post('/logout',  authenticate ,  userController.logoutController);

module.exports = userRoute;