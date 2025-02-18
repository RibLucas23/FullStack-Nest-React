import { homeRoute } from './pages/home/HomeRoute.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { productDetailRoute } from './pages/productDetail/productDetailRoute.tsx';
import { categoryRoute } from './pages/category/categoryRoute.tsx';
import { loginRoute } from './pages/login/LoginRoute.tsx';
import { registerRoute } from './pages/register/RegisterRoute.tsx';
import { adminPannelRoute } from './pages/admin-pannel/AdminRoute.tsx';
import { editDogPannelRoute } from './pages/admin-pannel/edit/dog/EditDogRoute.tsx';
import { createDogRoute } from './pages/admin-pannel/add/dog/CreateDogRoute.tsx';
import { createArticlegRoute } from './pages/admin-pannel/add/articles/CreateArticleRoute.tsx';
import { editArticlegRoute } from './pages/admin-pannel/edit/article/EditArticleRoute.tsx';

const router = createBrowserRouter([
	homeRoute,
	categoryRoute,
	productDetailRoute,
	loginRoute,
	registerRoute,
	adminPannelRoute,
	editDogPannelRoute,
	createDogRoute,
	createArticlegRoute,
	editArticlegRoute,
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
