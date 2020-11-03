"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

const sequelize_1 = require("sequelize");

const database_1 = __importDefault(require("../Database/database"));

const config = {
  tableName: 'User',
  sequelize: database_1.default
};

class User extends sequelize_1.Model {}

exports.User = User;
User.init({
  id: {
    primaryKey: true,
    type: sequelize_1.DataTypes.INTEGER,
    autoIncrement: true
  },
  age: {
    type: sequelize_1.DataTypes.INTEGER
  },
  name: {
    type: sequelize_1.DataTypes.STRING
  },
  image: {
    type: sequelize_1.DataTypes.STRING
  }
}, config);
User.sync({
  force: false
}).then(() => console.log('User table created')); //User.belongsToMany(Task, { through: 'userTask'})

User.sync({
  force: true
}).then(() => console.log('User table created'));
exports.default = User;