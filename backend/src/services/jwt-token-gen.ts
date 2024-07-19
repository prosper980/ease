import jwt from "jsonwebtoken"


export const jwtTokenGen = (adminName: string) => {

    try {

        const token = jwt.sign({ adminName }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return token;
    } catch (error) {
        console.log(`jwt error => ${error}`);
        return " ";
    }

}