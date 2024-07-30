import { ILoginPayload } from '../interfaces/users.interface';

const API = 'http://localhost:3000';

export const loginUser = async (user: ILoginPayload) => {
	const response = await fetch(`${API}/auth/local/signin`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: user.email,
			password: user.password,
		}),
	});
	if (!response.ok) {
		const errorData = (await response.json()) as {
			error: { message: string };
		};
		throw new Error(errorData.error.message || 'Login failed');
	}

	return { status: response.status };
};

export const registerUser = async (user: ILoginPayload) => {
	const response = await fetch(`${API}/auth/local/signup`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: user.email,
			password: user.password,
		}),
	});
	if (!response.ok) {
		const errorData = (await response.json()) as {
			error: { message: string };
		};
		throw new Error(errorData.error.message || 'Register failed');
	}

	return { status: response.status };
};

export const getDogReqById = async (id: string) => fetch(`${API}/dogs/${id}`);
