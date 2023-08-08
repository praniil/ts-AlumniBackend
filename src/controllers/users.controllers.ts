import { Request, Response } from "express";
import Users from "../models/users.model";
import UsersRepository from "../repositories/repsitories"

export default class UsersController{
    async create(req: Request, res: Response){
        try {
            res.status(201).json({
                messagw: "create ok",
                reqBody: req.body
            });
        }catch(err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
}
