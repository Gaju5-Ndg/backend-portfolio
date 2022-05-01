// import joi from "joi";
import mongoose from "mongoose";

    const userSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name:String,
        email: String,
        password: String,
        role:{
           type :String,
           enum:["user","admin"],
           default:"user"},
    })


export default mongoose.model('User', userSchema)