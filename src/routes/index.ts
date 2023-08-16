import { Application } from "express";
import UsersRoutes from "./users.routes"
import usersRoutes from "./users.routes";

export default class Routes{
    constructor(app : Application){
        app.use("/api/users", usersRoutes)
    }
}