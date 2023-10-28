import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // ... Do whatever you want here

  const body = await readBody(event);
  const passwordData = body.passwordData;




  const newPassword = prisma.password.create({
    data: passwordData,
  });

  

  return newPassword;
});


