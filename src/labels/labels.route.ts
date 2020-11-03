import express from 'express'
import labelController from './labels.controller'
import multer from 'multer';
const upload = multer({
  dest: '/home/hieu/Desktop/Trello-clone-api/public/uploads',
});
const router= express.Router();
router.post('/addLabels', labelController.addLabels);
export default router