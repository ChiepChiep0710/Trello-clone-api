import express from 'express';
import usersController from './users.controller';
import multer from 'multer';
const upload = multer({
	dest: process.env.PUBLICLINK,
});
const router = express.Router();
router.post('/addUsers', usersController.addUsers);
export default router;
