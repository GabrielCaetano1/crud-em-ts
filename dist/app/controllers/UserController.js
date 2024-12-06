import UserService from "../services/UserService.js";
class UserController {
    userService;
    constructor() {
        this.userService = new UserService();
    }
    createUser = async (req, res) => {
        try {
            const { name, email, password, active } = req.body;
            const user = await this.userService.createUser({ name, password, email, active });
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    };
    getAllUsers = async (req, res) => {
        try {
            const user = await this.userService.getAll();
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).json({ error });
        }
    };
    getUnique = async (req, res) => {
        try {
            const user = await this.userService.getUnique(Number(req.params.body));
            user
                ? res.status(200).json(user)
                : res.status(404).json({ error: 'User not found' });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    };
    updateUser = async (req, res) => {
        try {
            const user = await this.userService.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    };
    deleteUser = async (req, res) => {
        try {
            const user = await this.userService.deleteUser(Number(req.params.id));
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    };
}
export default UserController;
