const createUser= req =>{
    const createUser= {
        email:req.body.email,
        names:req.body.names,
        password:req.body.password
    }
        return createUser;


        
}
module.exports={createUser}
