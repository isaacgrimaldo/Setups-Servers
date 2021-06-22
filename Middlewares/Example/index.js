const {check} = require('express-validator'); //field validator 
const checkFields = require('../checkFields'); 


const MiddlewaresExample  = {
    
    routeExample:[
        check('someting','error message').notEmpty(), // Validation 
        checkFields, // middelware that send a error if the validations fails
    ]


}

module.exports = MiddlewaresExample;