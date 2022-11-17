import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { IUser } from "../Interface/CreateProduct";
import prismaClient from "../database/prismaCliente";

const errorTypeAndEmailMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, name, password }: IUser = req.body;
    let errors = "";

    if (typeof email !== "string") {
        errors += "[chave {email} valor incorreto ou em branco]";
    } else {
        if (await prismaClient.user.findUnique({ where: { email } })) {
            errors += "[{email} já cadastrado]";
        }
    }
    if (typeof name !== "string") {
        errors += "[chave {name} valor incorreto ou em branco]";
    }
    if (typeof password !== "string") {
        errors += "[chave {password} valor incorreto ou em branco]";
    }

    if (errors !== "") {
        throw new BadRequestError(errors);
    }
    next();
};

export default errorTypeAndEmailMiddleware;
