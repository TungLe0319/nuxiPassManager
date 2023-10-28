import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...]";

import { getServerSession } from "#auth";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  console.log(event.context.sessions);

  const session = await getServerSession(event, authOptions);
  const data = await readBody(event);

  const newPassword = await prisma.password.create({
    data: {
      title: data.title,
      note: data.note,
      email: session?.user?.email as string,
      website: data.website,
      password: data.password,
      user: {
        connect: {
          email: session?.user?.email as string,
          name: session?.user?.name as string,
        },
      },
    },
  });

  return {
    newPassword,
  };
});
