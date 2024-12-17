interface user {
    id?: number;
    name: string
    password: string
    email: string
    active: boolean
}

interface endereco {
    rua: string;
    cidade: string;
    estado: string;
    numero: string;
    complemento?: string;
}

interface CreateUser{
    usuario: user;
    enderecoUsuario: endereco;
}