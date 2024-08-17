import EditDogPannel from './EditDogPannel';

export const editDogPannelRoute = {
	path: '/admin-pannel/edit/dog/:id',
	element: <EditDogPannel />,
	loader: () => <div>Loading</div>,
};
