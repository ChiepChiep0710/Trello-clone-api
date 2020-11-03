import express from 'express';
import usersController from './users.controller';
import multer from 'multer';
const upload = multer({
	dest: '/home/hieu/Desktop/Trello-clone-api/public/uploads',
});
const router = express.Router();
router.post('/addUsers', usersController.addUsers);
export default router;
