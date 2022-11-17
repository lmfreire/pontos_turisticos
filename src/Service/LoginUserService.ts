import { IUserLogin } from "../Interface/CreateProduct";

import jwt from "jsonwebtoken";

const LoginUserService = async ({ email, password, user }: IUserLogin) => {
    const token = jwt.sign(
        {
            id: user!.id,
            email: user!.email,
        },
        "Chave_SECRETA",
        {
            subject: user!.id,
            expiresIn: "1d",
        }
    );

    return token;
};

export default LoginUserService;
