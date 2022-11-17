import { Request, Response } from "express";
import { IUpdatePonto } from "../Interface/CreateProduct";
import UpdatePontoService from "../Service/UpdatePontoService";

const UpdatePontoController = async (request: Request, response: Response) => {
    const { descricao, tipo }: IUpdatePonto = request.body;
    const { id } = request.params;

    const update = await UpdatePontoService({ descricao, tipo, id });

    response.json(update);
};

export default UpdatePontoController;
