import PrismaInstance from "../../connection/PrismaInstance.js";

export class UserRepository {
  private instance = PrismaInstance.createConnection();

  async createUser({ usuario, endereco, contato }: CreateUser) {
    try {
      const transaction = await this.instance.$transaction(async (tsx) => {
        const user = await tsx.users.create({ data: { ...usuario } });
        const address = await tsx.address.create({
          data: { ...endereco, user_Id: user.id },
        });
        const contact = await tsx.contact.create({
          data: { ...contato, user_Id: user.id },
        });
        return { user, address, contact };
      });
      return transaction;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Erro ao criar usuário: ${error.message}`);
      }
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.instance.users.findMany();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }

  async getUnique(user_Id: number) {
    try {
      const user = await this.instance.users.findUnique({
        where: { id: user_Id },
        include: {
          address: true,
          contact: true,
        },
      });
      if (!user) {
        throw new Error("Usuário não encontrado!");
      }
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }

  // async updateUser(id: number, data: UpdateUser) {
  //    try {
  //       const updateUser = await this.instance.users.update({
  //          where: { id },
  //          data: data,
  //       });
  //       return updateUser;
  //    } catch (error) {
  //       if (error instanceof Error) {
  //          throw new Error(error.message);
  //       }
  //       throw error
  //    }
  // }

  async deleteUser(id: number) {
    try {
      const deleteUser = await this.instance.users.delete({
        where: { id },
      });
      return deleteUser;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }
}
