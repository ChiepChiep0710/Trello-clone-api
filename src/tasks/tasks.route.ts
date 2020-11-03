import express from 'express'
import taskController from './tasks.controller'
import multer from 'multer';
const upload = multer({
  dest: '/home/hieu/Desktop/Trello-clone-api/public/uploads',
});
const router= express.Router();
router.post('/addTasks', taskController.addTasks);
router.post('/addLabelsToTask', taskController.addLabelsToTask)
router.post('/addMembers');
router.post('/addLabel');
router.post('/addTodoList');

export default router