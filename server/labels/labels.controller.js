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
const labels_service_1 = __importDefault(require("./labels.service"));
const addLabels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { label: label, status: status, error: error, } = yield labels_service_1.default.addLabels(req.body);
    if (label)
        res.status(status).send({ label });
    if (error)
        res.status(status).send({ error });
});
exports.default = {
    addLabels,
};
