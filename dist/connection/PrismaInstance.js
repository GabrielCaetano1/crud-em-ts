import { PrismaClient } from "@prisma/client";
class PrismaInstance {
    static PrismaInstance;
    static async createConnection() {
        if (!this.PrismaInstance) {
            this.PrismaInstance = new PrismaClient();
        }
        return this.PrismaInstance;
    }
}
export default PrismaInstance;
