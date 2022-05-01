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

const port = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`Server Started at ${port}`)
})

   mongoConnect();

   export default app