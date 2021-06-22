require('dotenv').config(); // access to environment variables (GOBAL FORM);
const Server = require('./Server');

const NewServer = new Server();
NewServer.listend(); //build the server