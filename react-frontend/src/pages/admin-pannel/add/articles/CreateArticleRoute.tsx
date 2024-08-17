import CreateArticle from './CreateArticle';

export const createArticlegRoute = {
	path: '/create/article',
	element: <CreateArticle />,
	loader: () => <div>Loading</div>,
};
