import Register from './Register';

export const registerRoute = {
	path: '/register',
	element: <Register />,
	loader: () => <div>Loading</div>,
};
