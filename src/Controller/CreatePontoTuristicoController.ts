import { Request, Response } from "express";
import CreatePontoTuristicoService from "../Service/CreatePontoTuristicoService";

const CreatePontoTuristicoController = async (
    request: Request,
    response: Response
) => {
    const { cidade, tipo, localizacao, descricao, fotos } = request.body;

    const ponto = await CreatePontoTuristicoService({
        cidade,
        tipo,
        localizacao,
        descricao,
        fotos,
    });

    return response.status(201).json(ponto);
};

export default CreatePontoTuristicoController;
