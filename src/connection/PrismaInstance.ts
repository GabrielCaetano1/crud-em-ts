import { PrismaClient } from "@prisma/client";

class PrismaInstance {
  private static PrismaInstance: PrismaClient;

  static createConnection(): PrismaClient {
    if (!this.PrismaInstance) {
      this.PrismaInstance = new PrismaClient();
    }
    return this.PrismaInstance;
  }
}

export default PrismaInstance;
