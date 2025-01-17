import type { Users } from "@prisma/client";
import { UserRepository } from "../repository/UserRepository.js";

class UserService {
  // private validateEmail(email: string): boolean {
  //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //    return emailRegex.test(email);
  // }

  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data: CreateUser) {
    if (data === null) {
      throw new Error("Invalid Data");
    }
    return await this.userRepository.createUser(data);
  }

  async getAll() {
    return this.userRepository.getAll;
  }

  async getUnique(id: number) {
    if (id === null) {
      throw new Error("Invalid Id");
    }

    return await this.userRepository.getUnique(id);
  }

  // async updateUser(id: number, data: UpdateUser) {
  //    if (id === null) {
  //       throw new Error("Invalid Update Data");
  //    }

  //    const userExists = await this.userRepository.getUnique(id);
  //    if (userExists === null) {
  //       throw new Error("Invalid Update Data");
  //    }

  //    if (data.email === null && this.validateEmail!) {
  //       throw new Error("Invalid Email");
  //    }

  //    const updateData: Partial<Users> = {
  //       ...data,
  //       updated_at: new Date(),
  //    };

  //    return await this.userRepository.updateUser(id, updateData);
  // }

  async deleteUser(id: number): Promise<void> {
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
