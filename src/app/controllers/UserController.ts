import { Request, Response } from "express";
import UserService from "../services/UserService.js";


class UserController{
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);

        } catch (error) {
            res.status(500).json({error})
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const user = await this.userService.getAllUsers()
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({error});

        }
    }

    async getUnique(req: Request, res: Response) {
        try {
            const user = await this.userService.getUnique(Number(req.params.body))
            user
            ? res.status(200).json(user)
            : res.status(404).json({error: 'User not found'})

        } catch (error) {
            res.status(500).json({error})

        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await this.userService.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({error})

        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const user = await this.userService.deleteUser(Number(req.params.id));
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({error})
            
        }
    }
}

export default UserController;