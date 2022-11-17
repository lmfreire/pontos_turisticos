import { Request, Response } from "express";
import { IUserLogin } from "../Interface/CreateProduct";
import LoginUserService from "../Service/LoginUserService";

const LoginUserController = async (request: Request, response: Response) => {
    const { email, password, user }: IUserLogin = request.body;

    const token = await LoginUserService({ email, password, user });

    response.json({ token });
};

export default LoginUserController;
