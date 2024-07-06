import { Admin, PrismaClient } from "@prisma/client"



export const addNewAdmin = async (newUsername: string, newPassword: string): Promise<boolean> => {

    try {
        const prisma = new PrismaClient();

        const newAdmin = await prisma.admin.create({
            data: {
                userName: newUsername,
                password: newPassword
            }
        })
        return true;
    } catch (error) {
        console.log(`Database error => ${error}`);
        return false;
    }
}