import { Request, Response } from "express";
import UserService from "../services/UserService.js";


class UserController{
    private userService: UserService

    constructor() {
        this.userService = new UserService();

    }

     createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log("Chegou aqui 2");
            const {name, email, password, active} = req.body;
            const user = await this.userService.createUser({name, password, email, active});
            res.status(201).json(user);

        } catch (error: any) {            
            res.status(500).json({error});

        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.getAll()
            res.status(200).json(user);

        } catch (error: any) {
            res.status(400).json({error});

        }
    }

    getUnique = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.getUnique(Number(req.params.body))
            user
            ? res.status(200).json(user)
            : res.status(404).json({error: 'User not found'})

        } catch (error: any) {
            res.status(500).json({error})

        }
    }

    updateUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);

        } catch (error: any) {
            res.status(500).json({error})

        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.deleteUser(Number(req.params.id));
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({error})
            
        }
    }
}

export default UserController;