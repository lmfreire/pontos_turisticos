export interface CreatePonto {
    cidade: Cidade;
    tipo: string;
    localizacao: string;
    descricao: string;
    fotos: Fotos[];
}

export interface Fotos {
    url: string;
}

export interface Cidade {
    nome: string;
    estado: string;
}

export interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
    user?: IUser;
}

export interface IUpdatePonto {
    id?: string;
    tipo: string;
    descricao: string;
}
