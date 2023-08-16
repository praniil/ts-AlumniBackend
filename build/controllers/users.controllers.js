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
const repsitories_1 = __importDefault(require("../repositories/repsitories"));
class UsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.username) {
                res.status(400).send({
                    message: "content cannot be empty"
                });
                return;
            }
            try {
                const user = req.body;
                if (!user.published)
                    user.published = false;
                const savedUsers = yield repsitories_1.default.save(user);
                res.status(201).send(savedUsers);
            }
            catch (err) {
                res.status(500).send({
                    message: "some error occured while retrieving tutorials"
                });
            }
        });
    }
}
exports.default = UsersController;
