const MiddlewaresExample = require('../Middlewares/Example/');
const ControllersExample = require('../Controllers/example.controllers');

const {Router} = require('express');
const routeExample = Router();


routeExample.get("/" ,[
    ...MiddlewaresExample.routeExample // middleware implementation in the route
], ControllersExample.routeExample) // Controller  implementation in the route

module.exports = routeExample; // Export route