import bcrypt from 'bcrypt'


export const passwordDecode = async (plainTextPassword: string, hash: string): Promise<string | boolean> => {

    try {

        const decode = await bcrypt.compare(plainTextPassword, hash)
        return decode;

    } catch (error) {
        console.log(`Admin password decoding error => ${error}`)
        return false;
    }
}


