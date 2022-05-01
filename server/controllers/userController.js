import admin from '../models/db/userModel.js';
import Mongoose from 'mongoose'
import validation from '../helpers/validation.js'
import compare from '../helpers/authentication.js'
import user from '../models/db/userModel.js'

class userController{

    static signup(req,res) {
        const { email,password,names,role } = req.body;
        const lowEmail = email.toLowerCase()
        const {error}= validation.validateUserData(req.body);

        if (error){
            return res.status(400).json({
                message: error.details[0].message.replace(/"/g, ''),
                status: 400
            })
        }
        const hashpassword =compare.hashpassword(password);
        admin.find({email:lowEmail},(error,result) => {
            if (result.length){
                return res.status(201).json({
                    error: 'This Email already exist, please use another email',
                    status:201
                })
            }
            const user = new admin ({
                _id: new Mongoose.Types.ObjectId(),
                names: names,
                email: lowEmail,
                role:role,
                password: hashpassword,
            });
            user 
            .save() 
            .then(() => {
                res.status(201).json({
                    message:'User Created Successfully',
                    status:201,
                });
            
            }).catch(err =>{
                res.status(500).json({
                    message: 'oh no, there is something wrong, check your internet or call support',
                    status: 500
                });
            })
        })  

    }


    static signin(req,res){
        const {email,password}=req.body;
        const {error}= validation.validateSignin(req.body);

        if (error){
            return res.status(401).json({
                message: error.details[0].message.replace(/"/g, ''),
                status: 401
            })
        }

       admin.find({email},(error,result) => {


           if(result.length){
            const compared =compare.comparePassword(password,result[0].password)
            
            if(compared){
            res.status(200).json({
                message: 'You are signed in successfully',
                status: 200,
                token:compare.generateToken(result[0])
            });
            }else{
                res.status(401).json({
                    message:'SignIn Failed',
                    status:401,
                });
            }
           }else {
            return res.status(401).json({
              status: 401,
              message: 'SignIn Failed'
            });
          }
            
               
        }) ;

    }

    static async getAllUsers (req, res) {
        const users = await user.find({});
        res.status(200).json({
            status: 200,
            data: users,
        })
     }
     static deleteUser =async (req,res)=>{
        const{ id} = req.params._id;
        const deleted = await user.findByIdAndDelete(id)
        if(deleted){
            return res.status(203).json({
                status: 203,
                message: `user is deleted successfully`
            })
        }
    }

    static updateProfile(req,res) {
        

        const{ id} = req.params._id;
        const {  names,email }= req.body;
        const {error}= validation.validateUserModData
 
         if (error){
             return res.status(400).json({
                 message: error.details[0].message.replace(/"/g, ''),
                 status: 400
             })
         }
        user.findByIdAndUpdate(id, {
            names:names,
            email:email
        },(err,result)=>{
            if(result){
                res.status(409).json({
                    message:'user updated',
                 user:result,
                 
                })
                console.log(result)
            }
        })
    
    }
}

export default  userController;