import Home from './Home';

export const homeRoute = {
	path: '/',
	element: <Home />,
	loader: () => <div>Loading</div>,
};
