import bcrypt from 'bcrypt'

export const passwordHash = async (plainTextPassword: string): Promise<string | boolean> => {

    try {

        const saltRounds = 14;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(plainTextPassword, salt);
        return hashPassword;

    } catch (error) {
        console.log(`Admin password hashing error => ${error}`)
        return false;
    }
}


