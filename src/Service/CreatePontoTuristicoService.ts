import prismaCliente from "../database/prismaCliente";
import { CreatePonto } from "../Interface/CreateProduct";

const CreatePontoTuristicoService = async ({
    cidade,
    descricao,
    localizacao,
    tipo,
    fotos,
}: CreatePonto) => {
    const ponto = await prismaCliente.pontosTuristicos.create({
        data: {
            descricao,
            localizacao,
            tipo,
            cidade: {
                connectOrCreate: {
                    create: {
                        estado: cidade.estado,
                        nome: cidade.nome,
                    },
                    where: {
                        nome: cidade.nome,
                    },
                },
            },
            Fotos: {
                createMany: {
                    data: fotos,
                    skipDuplicates: true,
                },
            },
        },
        include: {
            cidade: true,
            Fotos: true,
        },
    });

    return ponto;
};

export default CreatePontoTuristicoService;
