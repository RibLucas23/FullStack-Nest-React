import Login from './Login';

export const loginRoute = {
	path: '/login',
	element: <Login />,
	loader: () => <div>Loading</div>,
};
