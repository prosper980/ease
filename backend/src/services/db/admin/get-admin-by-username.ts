import { PrismaClient } from "@prisma/client"



export const getAdminByUsername = async (adminUserName: string): Promise<number | null> => {

    try {

        const prisma = new PrismaClient();

        const adminData = await prisma.admin.findUnique({
            where: {
                userName: adminUserName
            },
            select: {
                id: true
            }
        })

        if (!adminData) {
            return null;
        }

        return adminData.id;

    } catch (error) {
        console.log(`Database error => ${error}`);
        return null;
    }
}