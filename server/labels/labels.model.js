"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../Database/database"));
const config = {
    tableName: 'Label',
    sequelize: database_1.default,
};
class Label extends sequelize_1.Model {
}
exports.Label = Label;
Label.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
}, config);
Label.sync({ force: false }).then(() => console.log('Label table created'));
exports.default = Label;
