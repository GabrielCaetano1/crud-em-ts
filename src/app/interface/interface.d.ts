interface CreateUser{
    name: string
    password: string
    email: string
    active: boolean
}

interface UpdateUser{
    name?: string
    password?: string
    email?: string
    active?: boolean
}