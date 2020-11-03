"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const users_service_1 = __importDefault(require("./users.service"));

const addUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  const {
    user: user,
    status: status,
    error: error
  } = yield users_service_1.default.addUsers(req.body);
  if (user) res.status(status).send({
    user
  });
  if (error) res.status(status).send({
    error
  });
});

exports.default = {
  addUsers
};