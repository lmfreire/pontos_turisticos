import { IUpdatePonto } from "../Interface/CreateProduct";
import prismaCliente from "../database/prismaCliente";

const UpdatePontoService = async ({ descricao, tipo, id }: IUpdatePonto) => {
    return await prismaCliente.pontosTuristicos.update({
        where: {
            id,
        },
        data: {
            tipo,
            descricao,
        },
    });
};

export default UpdatePontoService;
