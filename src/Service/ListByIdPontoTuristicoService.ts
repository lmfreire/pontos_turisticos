import prismaCliente from "../database/prismaCliente";

const ListByIdPontoTuristicoService = async (id: string) => {
    return await prismaCliente.cidade.findMany({
        where: { id },
        include: { PontosTuristicos: true },
    });
};

export default ListByIdPontoTuristicoService;
