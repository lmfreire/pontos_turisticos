import { Router } from "express";
import CreatePontoTuristicoController from "./Controller/CreatePontoTuristicoController";
import CreateUserController from "./Controller/CreateUserController";
import ListByIdPontoTuristicoController from "./Controller/ListByIdPontoTuristicoController";
import ListPontoTuristicoController from "./Controller/ListPontoTuristicoController";
import LoginUserController from "./Controller/LoginUserController";
import UpdatePontoController from "./Controller/UpdatePontoController";
import AuthMiddleware from "./middleware/AuthMiddleware";
import errorLoginMiddeware from "./middleware/ErrorLoginMiddleware";
import errorTypeAndEmailMiddleware from "./middleware/errorTypeAndEmailMiddleware";
import errorTypeMiddleware from "./middleware/errorTypeMiddleware";

const appRoutes = Router();

appRoutes.post("/create", errorTypeMiddleware, CreatePontoTuristicoController);
appRoutes.post(
    "/create/user",
    errorTypeAndEmailMiddleware,
    CreateUserController
);
appRoutes.post("/login", errorLoginMiddeware, LoginUserController);
appRoutes.get("/list", ListPontoTuristicoController);
appRoutes.get("/list/:id", AuthMiddleware, ListByIdPontoTuristicoController);
appRoutes.patch("/patch/:id", AuthMiddleware, UpdatePontoController);

export default appRoutes;
