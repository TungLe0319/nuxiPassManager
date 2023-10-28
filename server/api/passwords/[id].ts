import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw new Error("no id");
  }
  const password = await prisma.password.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return password;
});
