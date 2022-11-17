import { Request, Response } from "express";
import ListByIdPontoTuristicoService from "../Service/ListByIdPontoTuristicoService";

const ListByIdPontoTuristicoController = async (
    request: Request,
    response: Response
) => {
    const { id } = request.params;

    const ponto = await ListByIdPontoTuristicoService(id);

    response.json(ponto);
};

export default ListByIdPontoTuristicoController;
