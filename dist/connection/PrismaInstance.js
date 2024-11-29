import { PrismaClient } from "@prisma/client";
class PrismaInstance {
    static PrismaInstance;
    static async createConnection() {
        return this.PrismaInstance
            ? this.PrismaInstance
            : (this.PrismaInstance = new PrismaClient());
    }
}
;
export default PrismaInstance;
