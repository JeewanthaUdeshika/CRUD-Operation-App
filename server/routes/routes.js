/**
 * This file has all the routes of the server
 */

const express = require('express');
const route = express.Router();     // This allows make routers in seperate file
const services = require('../services/render'); // Getting all the services methods
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET
 */
route.get('/', services.homeRoutes);

/**
 * @description add_user Route
 * @method GET /add_user
 */
route.get('/add_user', services.addUser);

/**
 * @description update_user Route
 * @method GET /update_user
 */
route.get('/update_user', services.updateUser);

// API to comminicate with the server
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


// Export the route variable
module.exports = route;
