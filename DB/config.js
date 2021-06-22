const mongoose = require('mongoose');


const ConnectDataBaseMg = async () => {
     
    try {
        // configuration of the data base connection  
      await mongoose.connect(process.env.MONGO_DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
       });

       console.log('Succesed connect to database');

    } catch (error) {
        console.log(error);
        throw new Error('ERROR to connect');
    }
}


module.exports = ConnectDataBaseMg;
