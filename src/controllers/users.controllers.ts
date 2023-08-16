import { Request, Response } from "express";
import Users from "../models/users.model";
import UsersRepository from "../repositories/repsitories"

export default class UsersController{
    async create(req: Request, res: Response){
        if(!req.body.username) {
            res.status(400).send({
                message: "content cannot be empty"
            });
            return;
        }
        try{
            const user : Users = req.body;
            if(!user.published) user.published = false;
            const savedUsers = await UsersRepository.save(user);
            res.status(201).send(savedUsers);
        }catch(err){
            res.status(500).send({
                message: "some error occured while retrieving tutorials"
            })
        }
    }


}