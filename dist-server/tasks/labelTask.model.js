"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelTask = void 0;

const sequelize_1 = require("sequelize");

const database_1 = __importDefault(require("../Database/database"));

const config = {
  tableName: 'labelTask',
  sequelize: database_1.default
};

class labelTask extends sequelize_1.Model {}

exports.labelTask = labelTask;
labelTask.init({
  id: {
    primaryKey: true,
    type: sequelize_1.DataTypes.INTEGER,
    autoIncrement: true
  },
  task_id: sequelize_1.DataTypes.INTEGER,
  label_id: sequelize_1.DataTypes.INTEGER
}, config);
labelTask.sync({
  force: true
}).then(() => console.log('labelTask table created'));
exports.default = labelTask;