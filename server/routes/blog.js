import express from 'express';
const postRouter = express.Router();

import blogController from '../controllers/blogController.js';


postRouter.post('/post', blogController.posts)
postRouter.get('/getAll', blogController.getAll)
postRouter.get('/getOne/:_id', blogController.getOne)
postRouter.patch('/updatePost/:_id', blogController.updatePost)
postRouter.delete('/deletePost/:_id', blogController.deletePost)

export default postRouter;