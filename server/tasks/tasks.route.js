"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_controller_1 = __importDefault(require("./tasks.controller"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const upload = multer_1.default({
    dest: process.env.PUBLICLINK,
});
const router = express_1.default.Router();
router.post('/addTasks', tasks_controller_1.default.addTasks);
router.post('/addLabelsToTask', tasks_controller_1.default.addLabelsToTask);
router.post('/addMembers');
router.post('/addLabel');
router.post('/addTodoList');
exports.default = router;
