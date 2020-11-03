"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_service_1 = __importDefault(require("./tasks.service"));
const addTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task: task, status: status, error: error } = yield tasks_service_1.default.addTasks(req.body);
    if (task)
        res.status(status).send({ task });
    if (error)
        res.status(status).send({ error });
});
const addLabelsToTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task: task, status: status, error: error } = yield tasks_service_1.default.addLabelsToTask(req.body);
    if (task)
        res.status(status).send({ task });
    if (error)
        res.status(status).send({ error });
});
exports.default = {
    addTasks,
    addLabelsToTask,
};
