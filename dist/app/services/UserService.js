import UserRepository from "../repository/UserRepository.js";
export class UserService {
    userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    ;
    async createUser(data) {
        if (!data || !data.name || !data.password || !data.email || !data.active) {
            throw new Error('Invalid Data');
        }
        return await this.userRepository.createUser(data);
    }
    ;
    async getAllUsers() {
        return await this.userRepository.getAll();
    }
    ;
    async getUnique(id) {
        if (id === null) {
            throw new Error('Invalid ID');
        }
        return await this.userRepository.getUnique(id);
    }
    ;
    async updateUser(id, data) {
        return await this.userRepository.updateUser(id, data);
    }
    ;
    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }
    ;
}
// export default UserService
