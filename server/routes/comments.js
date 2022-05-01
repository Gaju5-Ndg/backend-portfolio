import express from 'express';
const commentRouter = express.Router();

import commentController from '../controllers/commentsController.js';


commentRouter.post('/add/:_id', commentController.addComment)
commentRouter.get('/getAll', commentController.getComments)
commentRouter.get('/getOne/:_id', commentController.getCommentById)
commentRouter.delete('/delete/:_id', commentController.deleteComment)

export default commentRouter;