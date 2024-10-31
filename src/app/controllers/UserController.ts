import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository.js";

class UserController{
    static async createUser(
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        try {
            const user = await UserRepository
        } catch (error) {
            
        }
    }
}