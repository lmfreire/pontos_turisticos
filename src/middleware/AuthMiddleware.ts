import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";

const AuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        throw new BadRequestError("Token Required");
    }

    token = token.split(" ")[1];

    jwt.verify(token, "Chave_SECRETA", (error: any, decoded: any) => {
        if (error) {
            throw new UnauthorizedError("Invalid token");
        }

        req.user = {
            id: decoded.id,
            email: decoded.email,
        };

        next();
    });
};

export default AuthMiddleware;
