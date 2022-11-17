import { Request, Response, NextFunction } from "express";
import prismaCliente from "../database/prismaCliente";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { IUserLogin } from "../Interface/CreateProduct";
import bcrypt from "bcryptjs";

const errorLoginMiddeware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password }: IUserLogin = req.body;

    let errors = "";

    if (typeof email !== "string") {
        errors += "[chave {email} valor incorreto ou em branco]";
    }
    if (typeof password !== "string") {
        errors += "[chave {password} valor incorreto ou em branco]";
    }

    if (errors !== "") {
        throw new BadRequestError(errors);
    }

    const user = await prismaCliente.user.findUnique({ where: { email } });

    if (!user) {
        throw new UnauthorizedError("Invalid credentials");
    }

    if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedError("Invalid credentials");
    }

    req.body.user = user;

    next();
};

export default errorLoginMiddeware;
