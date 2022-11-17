import prismaCliente from "../database/prismaCliente";

const ListPontoTuristicoService = async () => {
    return await prismaCliente.pontosTuristicos.findMany();
};

export default ListPontoTuristicoService;
