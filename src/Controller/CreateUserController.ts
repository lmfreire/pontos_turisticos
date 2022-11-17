import { Request, Response } from "express";
import { IUser } from "../Interface/CreateProduct";
import CreateUserService from "../Service/CreateUserService";

const CreateUserController = async (request: Request, response: Response) => {
    const { email, name, password }: IUser = request.body;

    const user = await CreateUserService({ email, name, password });

    response.status(201).json({ user });
};

export default CreateUserController;
