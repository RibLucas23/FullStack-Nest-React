const API = 'http://localhost:3000';

export const getDogsRequest = async () => fetch(`${API}/dogs`);
export const getDogsReqLimit = async (limit: string) =>
	fetch(`${API}/dogs?limit=${limit}`);

// export const createDogRequest = async (dog: Createdog) =>
// 	fetch(`${API}`, {
// 		method: 'POST',
// 		body: JSON.stringify(dog),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});

export const deleteDogRequest = async (id: string) =>
	fetch(`${API}/${id}`, {
		method: 'DELETE',
	});

// export const updateDogRequest = async (id: string, dog: UpdateDog) =>
// 	fetch(`${API}/${id}`, {
// 		method: 'PUT',
// 		body: JSON.stringify(dog),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});

export const getDogReqById = async (id: string) => fetch(`${API}/dogs/${id}`);
