const Router = require('express').Router();
const controller = require('./controller.js');

Router.get('/getDb', controller.allItems);
// Router.get('/search', controller.searchItem);



module.exports = Router;