import AdminPannel from './AdminPannel';

export const adminPannelRoute = {
	path: '/admin-pannel',
	element: <AdminPannel />,
	loader: () => <div>Loading</div>,
};
