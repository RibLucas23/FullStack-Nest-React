import ProductDetail from './ProductDetail';

export const productDetailRoute = {
	path: '/dog-detail/:id',
	element: <ProductDetail />,
	loader: () => <div>Loading</div>,
};
