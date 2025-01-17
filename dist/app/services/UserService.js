import UserRepository from "../repository/UserRepository.js";
class UserService {
	validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	userRepository;
	constructor() {
		this.userRepository = new UserRepository();
	}
	async createUser(data) {
		if (data === null) {
			throw new Error("Invalid Data");
		}
		return await this.userRepository.createUser(data);
	}
	async getAll() {
		return this.userRepository.getAll;
	}
	async getUnique(id) {
		if (id === null) {
			throw new Error("Invalid Id");
		}
		return await this.userRepository.getUnique(id);
	}
	async updateUser(id, data) {
		if (id === null) {
			throw new Error("Invalid Update Data");
		}
		const userExists = await this.userRepository.getUnique(id);
		if (userExists === null) {
			throw new Error("Invalid Update Data");
		}
		if (data.email === null && this.validateEmail) {
			throw new Error("Invalid Email");
		}
		const updateData = {
			...data,
			updated_at: new Date(),
		};
		return await this.userRepository.updateUser(id, updateData);
	}
	async deleteUser(id) {
		try {
			const userExists = await this.userRepository.getUnique(id);
			if (userExists === null) {
				throw new Error("Invalid User");
			}
			await this.userRepository.deleteUser(id);
		} catch (error) {
			throw new Error("Catch");
		}
	}
}
export default UserService;
