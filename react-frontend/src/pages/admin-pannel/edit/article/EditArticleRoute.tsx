import EditArticle from './EditArticle';

export const editArticlegRoute = {
	path: '/admin-pannel/edit/article/:id',
	element: <EditArticle />,
	loader: () => <div>Loading</div>,
};
