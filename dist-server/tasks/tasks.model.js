"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

const sequelize_1 = require("sequelize");

const labels_model_1 = __importDefault(require("../labels/labels.model"));

const users_model_1 = __importDefault(require("../users/users.model"));

const database_1 = __importDefault(require("../Database/database"));

const labelTask_model_1 = __importDefault(require("./labelTask.model"));

const config = {
  tableName: 'Task',
  sequelize: database_1.default
};

class Task extends sequelize_1.Model {}

exports.Task = Task;
Task.init({
  id: {
    primaryKey: true,
    type: sequelize_1.DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    type: sequelize_1.DataTypes.STRING
  },
  image: {
    type: sequelize_1.DataTypes.STRING
  },
  toDoList: {
    type: sequelize_1.DataTypes.STRING
  }
}, config);
Task.sync({
  force: false
}).then(() => console.log('Task table created'));
Task.belongsToMany(labels_model_1.default, {
  through: labelTask_model_1.default,
  as: 'label',
  foreignKey: "task_id",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
labels_model_1.default.belongsToMany(Task, {
  through: labelTask_model_1.default,
  as: 'task',
  foreignKey: "label_id",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Task.belongsToMany(users_model_1.default, {
  through: "userTask",
  as: 'user',
  foreignKey: "task_id"
});
users_model_1.default.belongsToMany(Task, {
  through: 'userTask',
  as: 'task',
  foreignKey: "user_id"
});
exports.default = Task;