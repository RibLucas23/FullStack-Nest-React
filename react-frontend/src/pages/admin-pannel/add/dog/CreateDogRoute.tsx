import CreateDog from './CreateDog';

export const createDogRoute = {
	path: '/create/dog',
	element: <CreateDog />,
	loader: () => <div>Loading</div>,
};
