import type { Request, Response } from "express";
import { UserService } from "../services/UserService.js";

export class UserController {


  async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.create(req.body)
      
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //   async getAllUsers(req: Request, res: Response) {
  //     try {
  //       const user = await UserService.(200).json(user);
  //     } catch (error) {
  //       res.status(400).json({ error });
  //     }
  //   }

  //   async getUnique(req: Request, res: Response) {
  //     try {
  //       const user = await UserService..body));
  //       user
  //         ? res.status(200).json(user)
  //         : res.status(404).json({ error: "User not found" });
  //     } catch (error) {
  //       res.status(500).json({ error });
  //     }
  //   }

  //   // async updateUser(req: Request, res: Response) {
  //   //    try {
  //   //       const user = await UserService.(req.params.id),
  //   //          req.body,
  //   //       );
  //   //       res.status(200).json(user);
  //   //    } catch (error) {
  //   //       res.status(500).json({ error });
  //   //    }
  //   // }

  //   async deleteUser(req: Request, res: Response) {
  //     try {
  //       const user = await UserService..id));
  //       res.status(200).json(user);
  //     } catch (error) {
  //       res.status(500).json({ error });
  //     }
  //   }
}
