import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { CreatePonto } from "../Interface/CreateProduct";

const errorTypeMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { cidade, tipo, localizacao, descricao, fotos }: CreatePonto =
        req.body;
    let errors = "";

    if (typeof tipo !== "string") {
        errors += "[chave {tipo} valor incorreto ou em branco]";
    }
    if (typeof localizacao !== "string") {
        errors += "[chave {localização} valor incorreto ou em branco]";
    }
    if (typeof descricao !== "string") {
        errors += "[chave {descricao} valor incorreto ou em branco]";
    }
    if (typeof cidade !== "object") {
        errors += "[chave {cidade} valor incorreto ou em branco]";
    } else {
        if (typeof cidade.estado !== "string") {
            errors += "[chave {estado} valor incorreto ou em branco]";
        }
        if (typeof cidade.nome !== "string") {
            errors += "[chave {nome} valor incorreto ou em branco]";
        }
    }

    if (typeof fotos !== "object") {
        errors += "[chave {nome} valor incorreto ou em branco]";
    }

    if (errors !== "") {
        throw new BadRequestError(errors);
    }
    next();
};

export default errorTypeMiddleware;
