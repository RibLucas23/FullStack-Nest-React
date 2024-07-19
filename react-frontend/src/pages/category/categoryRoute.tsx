import Category from './Category';

export const categoryRoute = {
	path: '/category',
	element: <Category />,
	loader: () => <div>Loading</div>,
};
