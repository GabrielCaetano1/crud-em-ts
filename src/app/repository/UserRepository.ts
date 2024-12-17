import PrismaInstance from "../../connection/PrismaInstance.js";


class UserRepository {
    private conexaoExiste = await PrismaInstance.createConnection()

    async createUser({usuario, enderecoUsuario}: CreateUser) {
        try {
            const resultado = await this.conexaoExiste.$transaction(async (tsx) => {
                const user = await tsx.user.create({data: {...usuario}})
                const endereco = await tsx.endereco.create({data:{...enderecoUsuario}})
                if (user.id && endereco.id) {
                    const userEndereco = await tsx.user_endereco.create({
                        data: {
                            endereco_id: endereco.id,
                            user_id: user.id
                        },
                    });
                }
            })
            return resultado;
            
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
            const buscarTodos = await this.conexaoExiste.user.findMany();
            return buscarTodos

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao encontrar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao encontrar o usuário: Erro Desconhecido!`)
            }
        }
    };

    async getUnique(id?: number, email?: string){
        try {
            if (id) {
                const registro: user | null = await this.conexaoExiste.user.findUnique({
                    where: {id},
                    include: {endereco: true}
                });
                return registro
            } else {
                const registro: user | null = await this.conexaoExiste.user.findFirst({
                    where: {email},
                    include: {endereco: true}
                })
                return registro
            }

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao encontrar o usuário: ${error.message}`)
                
            } else {
                throw new Error(`Erro ao encontrar o usuário: Erro Desconhecido!`)
            }
        }
    };

    async updateUser(){
        try {
            
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
            const deleteUser = await conexaoExiste.user.delete({
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