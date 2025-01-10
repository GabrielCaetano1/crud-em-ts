import { PrismaClient } from "@prisma/client";

class PrismaInstance {
	private static PrismaInstance: PrismaClient;

	static async createConnection(): Promise<PrismaClient> {
		if (!this.PrismaInstance) {
			this.PrismaInstance = new PrismaClient();
		}
		return this.PrismaInstance;
	}
}

export default PrismaInstance;
