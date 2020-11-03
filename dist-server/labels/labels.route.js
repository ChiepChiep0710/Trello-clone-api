"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const express_1 = __importDefault(require("express"));

const labels_controller_1 = __importDefault(require("./labels.controller"));

const dotenv_1 = __importDefault(require("dotenv"));

dotenv_1.default.config();

const multer_1 = __importDefault(require("multer"));

const upload = multer_1.default({
  dest: process.env.PUBLICLINK
});
const router = express_1.default.Router();
router.post('/addLabels', labels_controller_1.default.addLabels);
exports.default = router;