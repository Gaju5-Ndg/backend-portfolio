import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger.js';
// import {} from "dotenv/config";
import express from 'express';
// import mongoConnect from './config/db.config.js';
import userRouter  from './routes/user.js';
import postRouter from './routes/blog.js';
import messageRoutes  from './routes/messages.js';
import commentRouter from './routes/comments.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/post', postRouter)
app.use('/api/message',messageRoutes )
app.use('/api/comment', commentRouter)
app.use('/api/port', swaggerUi.serve,swaggerUi.setup(swaggerOptions))

const port = process.env.PORT || 5000

mongoose.connect('mongodb+srv://Rose-31:ikinyogote@cluster0.ehn4f.mongodb.net/test',{useUnifiedTopology:true}).then(() =>{
    console.log("database connected successfly");
    app.listen(port);
    console.log(`Server Started at ${port}`);
}).catch(error =>{
    console.log(error)
})

// app.listen(3000, () => {
//     console.log(`Server Started at ${port}`)
// })

//    mongoConnect();

   export default app