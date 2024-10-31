import PrismaInstance from "../connection/PrismaInstance.js";

interface User{
    id: number;
    name: string;
    password: string
};

class UserRepository{
    // private connectionDb = PrismaInstance.createConnection();
    async create(body: User) {
        try {
            const connectionExist = await PrismaInstance.createConnection();

            const user = await connectionExist.users.create({
                data: {...body},
            });

            console.log(user + "Deu Certo");
            return user as User
            
        } catch (error) {
            throw error;
        }
    }

    async getAll(id?: number) {
        try {
            
        } catch (error) {
            
        }
    }
};

export default UserRepository;