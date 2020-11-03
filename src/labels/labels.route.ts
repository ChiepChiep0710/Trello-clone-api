import express from 'express'
import labelController from './labels.controller'
import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
const upload = multer({
  dest: process.env.PUBLICLINK,
});
const router= express.Router();
router.post('/addLabels', labelController.addLabels);
export default router