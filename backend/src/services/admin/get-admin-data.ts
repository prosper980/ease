import { PrismaClient } from "@prisma/client"



/**
 * Get user data from db;
 * @param {string} adminUserName 
 * @returns {Promise}
 */

export const getAdminData = async (adminUserName: string): Promise<object | null> => {

    try {

        const prisma = new PrismaClient();

        const adminData = await prisma.admin.findUnique({
            where: {
                userName: adminUserName
            },
            select: {
                id: true,
                userName: true,
                createdAt: true
            }
        })

        if (!adminData) {
            return null;
        }

        return adminData;

    } catch (error) {
        console.log(`Database error => ${error}`);
        return null;
    }
}