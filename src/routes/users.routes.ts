import { Router } from "express"
import UsersController from "../controllers/users.controllers";

class UsersRoutes{
    router = Router();
    controller = new UsersController();
    constructor(){
        this.iniitalizeRoutes();
    }
    iniitalizeRoutes() {
        this.router.post("/", this.controller.create)
    }
}