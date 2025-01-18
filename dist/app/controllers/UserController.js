import { UserService } from "../services/UserService.js";
export class UserController {
    async createUser(req, res) {
        try {
            const user = await UserService.create(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
}
