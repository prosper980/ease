import { getAdminByUsername } from "../db/admin/get-admin-by-username";
import coookieVerify from "./cookie-verify";


/**
* Verifies parameter id using cookie 
 * @param adminUsername 
 * @param cookie 
 * @returns {Promise}
 */

export const adminIdVerify = async (adminUsername: string, cookie: string): Promise<boolean> => {

    const username = coookieVerify(cookie, true);

    const firstAdminDataInDb = await getAdminByUsername(adminUsername)

    if (typeof username === 'string') {
        const secondAdminDataInDb = await getAdminByUsername(username);

        return firstAdminDataInDb === secondAdminDataInDb;
    }

    return false;
}