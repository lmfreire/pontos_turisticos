import { Request, Response } from "express";
import ListPontoTuristicoService from "../Service/ListPontoTuristicoService";

const ListPontoTuristicoController = async (
    request: Request,
    response: Response
) => {
    const pontos = await ListPontoTuristicoService();

    response.json(pontos);
};

export default ListPontoTuristicoController;
