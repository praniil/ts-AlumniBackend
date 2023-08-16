"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new users_controllers_1.default();
        this.iniitalizeRoutes();
    }
    iniitalizeRoutes() {
        this.router.post("/", this.controller.create);
    }
}
exports.default = new UsersRoutes().router;
