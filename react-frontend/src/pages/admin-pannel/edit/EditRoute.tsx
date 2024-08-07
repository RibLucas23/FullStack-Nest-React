import EditPannel from './EditPannel';

export const editPannelRoute = {
	path: '/admin-pannel/edit/:id',
	element: <EditPannel />,
	loader: () => <div>Loading</div>,
};
