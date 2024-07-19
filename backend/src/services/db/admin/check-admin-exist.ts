import { PrismaClient } from "@prisma/client"


export const checkAdminUsernameExist = async (newUsername: string): Promise<boolean> => {

    try {

        const prisma = new PrismaClient();

        const user = await prisma.admin.findUnique({
            where: {
                userName: newUsername
            }
        })

        return (user === null) ? false : true;

    } catch (error) {
        console.log(`Database error => ${error}`);
        return false;
    }

}