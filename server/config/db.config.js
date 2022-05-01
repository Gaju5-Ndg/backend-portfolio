import {} from "dotenv/config";
import mongoose from 'mongoose';
// const connectionURL = process.env.DATABASE_URL
// console.log(connectionURL);

const  mongoConnect= async ()=>{
    
   await mongoose.connect('mongodb+srv://Rose-31:ikinyogote@cluster0.ehn4f.mongodb.net/test', {
        useNewUrlParser: true,
    })
    .then(()=>console.log('database connected successfully'))
       .catch((err)=>console.log(err))
   
}

export default mongoConnect;
