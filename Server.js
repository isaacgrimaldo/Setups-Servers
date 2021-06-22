 const express = require('express'); 
 const cors = require('cors');

const dataBaseConnection = require('./DB/config');
const exampleRoute = require('./Routers/example.route');

 class  Server {
    
    constructor(){
        this.PORT = process.env.PORT || 9000;
        this.app = express(); // Create the server with Express 

        this.Middelwares(); 
        this.DataBase();

        // write the routers that you wil use
        this.path = {
             exampleRoute : '/api/example'
        }

        this.Routers();
    }
    
    Middelwares(){

        this.app.use(cors()); // Cors Implementations 
        this.app.use(express.json()); // Reading JSON documents
        this.app.use(express.static('public')); // Static content
 
    }
    
    async DataBase(){
          await  dataBaseConnection(); // database connection
    }
  
   Routers(){
        this.app.use( this.path.exampleRoute , exampleRoute); // route implementation in the server
   }


    listend(){ // stands up the server 
        this.app.listen( this.PORT , (err) =>{
             if(err) throw new Error('Server error: ' + err);

             console.log('Server Run on the port: ' + this.PORT)
        })
    }

 } 




 module.exports =  Server;