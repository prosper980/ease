
import { Admin, PrismaClient } from "@prisma/client"


export const getPassword = async (newUsername: string): Promise<string> => {

    try {

        const prisma = new PrismaClient();

        const user = await prisma.admin.findUnique({
            where: {
                userName: newUsername
            },
            select: {
                password: true
            }
        })

        if (!user) {
            return null;
        }
        return user.password;

    } catch (error) {
        console.log(`Database  error in get_password => ${error}`);
        return null;
    }

}