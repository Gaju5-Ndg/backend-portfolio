import {} from "dotenv/config";
import mongoose from 'mongoose';
// const connectionURL = process.env.DATABASE_URL
// console.log(connectionURL);

const  mongoConnect= async ()=>{
    
   await mongoose.connect('mongodb://0.0.0.0:27017/data', {
        useNewUrlParser: true,
    })
    .then(()=>console.log('database connected successfully'))
       .catch((err)=>console.log(err))
   
}

export default mongoConnect;
