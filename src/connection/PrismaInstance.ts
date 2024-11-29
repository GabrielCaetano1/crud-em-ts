import { PrismaClient } from "@prisma/client";

class PrismaInstance {
    private static PrismaInstance: PrismaClient;

    static async createConnection(): Promise<PrismaClient> {
        return this.PrismaInstance
        ? this.PrismaInstance
        :(this.PrismaInstance = new PrismaClient());
    }
};

export default PrismaInstance;