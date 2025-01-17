import UserService from "../services/UserService.js";
class UserController {
	userService = new UserService();
	// constructor() {
	// 	this.userService = new UserService();
	// }
	async createUser(req, res) {
		try {
			const data = req.body;
			const user = await this.userService.createUser(data);
			res.status(201).json(user);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
	async getAllUsers(req, res) {
		try {
			const user = await this.userService.getAll();
			res.status(200).json(user);
		} catch (error) {
			res.status(400).json({ error });
		}
	}
	async getUnique(req, res) {
		try {
			const user = await this.userService.getUnique(Number(req.params.body));
			user
				? res.status(200).json(user)
				: res.status(404).json({ error: "User not found" });
		} catch (error) {
			res.status(500).json({ error });
		}
	}
	async updateUser(req, res) {
		try {
			const user = await this.userService.updateUser(
				Number(req.params.id),
				req.body,
			);
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
	async deleteUser(req, res) {
		try {
			const user = await this.userService.deleteUser(Number(req.params.id));
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}
export default UserController;
