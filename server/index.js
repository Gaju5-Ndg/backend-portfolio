import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger.js';
// import {} from "dotenv/config";
import express from 'express';
import mongoConnect from './config/db.config.js';
import userRouter  from './routes/user.js';
import postRouter from './routes/blog.js';
import messageRoutes  from './routes/messages.js';
import commentRouter from './routes/comments.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRouter)
app.use('/api/post', postRouter)
app.use('/api/message',messageRoutes )
app.use('/api/comment', commentRouter)
app.use('/api/port', swaggerUi.serve,swaggerUi.setup(swaggerOptions))


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

   mongoConnect();

   export default app