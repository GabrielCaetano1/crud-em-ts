interface user {
	name: string;
	password: string;
	active?: boolean;
}

interface address {
	street: string;
	state: string;
	neighborhood: string;
	house_number: string;
}

interface contact {
	phone1: string;
	phone2?: string;
	email: string;
	socials?: string;
}

interface UpdateUser {
	name?: string;
	password?: string;
	email?: string;
	active?: boolean;
}

interface UserCreate {
	usuario: user;
	endereco: address;
	contato: contact;
}