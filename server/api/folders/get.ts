import { getServerSession } from "#auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...]";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions);
  const folders = await prisma.folder.findMany({
    where: {
      user: {
        email: session?.user?.email as string,
        name: session?.user?.name,
      },
      
    },
  });
  return folders
});
