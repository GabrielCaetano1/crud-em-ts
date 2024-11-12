import PrismaInstance from "../connection/PrismaInstance.js";
import bcrypt from 'bcrypt';

interface CreateUser{
    name: string;
    password: string
}

class UserReposity {
    async create(body: CreateUser) {
        try {
            const conexaoExiste = await PrismaInstance.createConnection();
            const user = await conexaoExiste.users.create({
                data: {...body},
            });
            console.log(user.id);
            return user as CreateUser
        } catch (error) {
            throw error
        }
    }
};

export default UserReposity;