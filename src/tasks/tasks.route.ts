import express from 'express';
import taskController from './tasks.controller';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();
const upload = multer({
	dest: process.env.PUBLICLINK ,
});
const router = express.Router();
router.post('/addTasks', taskController.addTasks);
router.post('/addLabelsToTask', taskController.addLabelsToTask);
router.post('/addMembers');
router.post('/addLabel');
router.post('/addTodoList');

export default router;
