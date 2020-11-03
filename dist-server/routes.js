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

const labels_route_1 = __importDefault(require("./labels/labels.route"));

const tasks_route_1 = __importDefault(require("./tasks/tasks.route"));

const users_route_1 = __importDefault(require("./users/users.route"));

const router = express_1.default.Router();
router.use('/tasks', tasks_route_1.default);
router.use('/labels', labels_route_1.default);
router.use('/users', users_route_1.default);
exports.default = router;