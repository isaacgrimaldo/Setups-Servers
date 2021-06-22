
const ControllersExample = {

    routeExample:(req  , res ) => {
    
        return res.status(200).json({
            ok: true,
            data: 'Alright'
        })
    },

}

/*If  the petision pass the middelwates and validationes the controller
        process the information and return a response
    */ 

module.exports = ControllersExample