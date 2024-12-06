import PrismaInstance from "../../connection/PrismaInstance.js";


class UserRepository {
    async createUser({name, password, email, active}: CreateUser) {
        console.log("Chegou aqui 3");
        try {
            console.log("Chegou aqui");
            
            const conexaoExiste = await PrismaInstance.createConnection()
            const createUser = await conexaoExiste.users.create(
                {
                    data: {name, password, email, active}
                }
            );
            
            return createUser;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao criar usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao criar usuário: Erro Desconhecido!`)
            }
        }
    };

    async getAll() {
        try {
            const conexaoExiste = await PrismaInstance.createConnection();
            return await conexaoExiste.users.findMany();

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao encontrar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao encontrar o usuário: Erro Desconhecido!`)
            }
        }
    };

    async getUnique(id: number){
        try {
            const conexaoExiste = await PrismaInstance.createConnection();
            const user = await conexaoExiste.users.findUnique(
                {where: {id}}
            );
            return user as CreateUser;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao encontrar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao encontrar o usuário: Erro Desconhecido!`)
            }
        }
    };

    async updateUser(id: number, data: UpdateUser){
        try {
            const conexaoExiste = await PrismaInstance.createConnection();
            const updateUser = await conexaoExiste.users.update({
                where: {id},
                data: data
            })
            return updateUser;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao deletar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao deletar o usuário: Erro Desconhecido!`)
            }
        }
    };

    async deleteUser(id: number) {
        try {
            const conexaoExiste = await PrismaInstance.createConnection();
            const deleteUser = await conexaoExiste.users.delete({
                where: {id},
            })
            return deleteUser;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao deletar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao deletar o usuário: Erro Desconhecido!`)
            }
        }
    };


};

export default UserRepository;