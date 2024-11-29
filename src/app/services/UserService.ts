import UserRepository from "../repository/UserRepository.js";

class UserService{
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    };

    async createUser(data: {name: string, password: string, email: string, active: boolean}) {
        return await this.userRepository.create(data);
    };

    async getAllUsers() {
        return await this.userRepository.getAll();
    };

    async getUnique(id: number) {
        return await this.userRepository.getUnique(id);
    };

    async updateUser(id: number, data: {name?: string, password?: string, email?: string, active?: boolean}) {
        return await this.userRepository.updateUser(id, data);
    };

    async deleteUser(id: number) {
        return await this.userRepository.deleteUser(id);
    };

}

export default UserService