const express = require('express');
const itemRouter = require("./itemRoutes.js")
const userRouter = require("./userRoutes.js")
const v1Router = express.Router();

v1Router.use('/item', itemRouter);
v1Router.use('/user' ,  userRouter)
module.exports = v1Router;

