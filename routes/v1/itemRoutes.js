const express = require('express');
const authenticate = require('../../middleware/auth.js')
const roleMiddleware = require('../../middleware/role.js')

const  itemController  = require('../../controllers/index.js');

const itemRouter = express.Router();

itemRouter.get('/ping',    itemController.pingController);

itemRouter.post('/create',  authenticate, roleMiddleware(['Admin']), itemController.createController);

itemRouter.get('/all',   itemController.getAllItemsController );

itemRouter.get('/byId/:id',   itemController.getItemByIdController);

itemRouter.put('/update/:id', authenticate, roleMiddleware(['Admin']), itemController.updateItemController );

itemRouter.delete('/delete/:id', authenticate, roleMiddleware(['Admin']), itemController.deleteItemController );

module.exports = itemRouter;

