const {request , response} = require('express');
const {validationResult} =require('express-validator');

const checkFields = (req = request , res =response , next ) => {

    const erros = validationResult(req); // verify if there'some error
    if(!erros.isEmpty()){ 
        return res.status(401).json({ // Send the error in a response 
            ok:false,
            erros: erros.mapped(),
        })
    }

     next();
}


module.exports = checkFields;
