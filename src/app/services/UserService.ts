import { UserRepository } from "../repository/UserRepository.js";

const userRepository = new UserRepository();

export class UserService {
  static async create(data: CreateUser) {
    // console.log("Data: ", data);
    if (
      data.usuario === null ||
      data.endereco === null ||
      data.contato === null
    ) {
      throw new Error("Invalid Data");
    }
    const user = await userRepository.createUser(data);
    return user;
  }
}
