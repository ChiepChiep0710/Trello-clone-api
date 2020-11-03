import express from 'express'
import labelRouter from './labels/labels.route'
import taskRouter from './tasks/tasks.route'
import userRouter from './users/users.route'
const router= express.Router();
router.use('/tasks', taskRouter)
router.use('/labels', labelRouter)
router.use('/users', userRouter)
export default router