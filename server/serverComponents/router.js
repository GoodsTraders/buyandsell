const Router = require('express').Router();
const controller = require('./controller.js');

Router.get('/getDb', controller.allItems);
Router.post('/add', controller.addItem);
Router.post('/email', controller.sendEmail);
Router.post('/newuser', controller.addUser);
Router.get('/getUser', controller.getUser);
Router.get('*', controller.addHistory);




module.exports = Router;