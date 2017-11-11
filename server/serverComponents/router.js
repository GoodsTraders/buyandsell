const Router = require('express').Router();
const controller = require('./controller.js');

Router.get('/getDb', controller.allItems);
Router.post('/add', controller.addItem);
Router.post('/email', controller.sendEmail);



module.exports = Router;