type optionalValue = string | null;

interface user {
	name: string;
	cpf: string;
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
	phone2?: optionalValue;
	email: string;
	socials?: optionalValue;
}

interface CreateUser {
	usuario: user;
	endereco: address;
	contato: contact;
}
