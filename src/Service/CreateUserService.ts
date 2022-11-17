import { IUser } from "../Interface/CreateProduct";
import { hash } from "bcryptjs";
import prismaCliente from "../database/prismaCliente";

const CreateUserService = async ({ email, name, password }: IUser) => {
    password = await hash(password, 10);

    const user = await prismaCliente.user.create({
        data: {
            email,
            name,
            password,
        },
        select: {
            email: true,
            name: true,
        },
    });

    return user;
};

export default CreateUserService;
