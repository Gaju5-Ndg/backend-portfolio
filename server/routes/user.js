import express from 'express';
const userRouter = express.Router();

import userController from '../controllers/userController.js'

userRouter.post('/signup', userController.signup)
userRouter.post('/signin', userController.signin)
userRouter.get('/getAll', userController.getAllUsers)
// router.get('/getOne/:_id', userController.getOne)
userRouter.patch('/update/:_id', userController.updateProfile)
userRouter.delete('/delete/:_id', userController.deleteUser)

export default  userRouter;