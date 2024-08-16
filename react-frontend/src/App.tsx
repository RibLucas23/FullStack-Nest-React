import { homeRoute } from './pages/home/HomeRoute.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { productDetailRoute } from './pages/productDetail/productDetailRoute.tsx';
import { categoryRoute } from './pages/category/categoryRoute.tsx';
import { loginRoute } from './pages/login/LoginRoute.tsx';
import { registerRoute } from './pages/register/RegisterRoute.tsx';
import { adminPannelRoute } from './pages/admin-pannel/AdminRoute.tsx';
import { editDogPannelRoute } from './pages/admin-pannel/edit-dogs/EditDogRoute.tsx';
import { createDogRoute } from './pages/admin-pannel/add/dog/CreateDogRoute.tsx';

const router = createBrowserRouter([
	homeRoute,
	categoryRoute,
	productDetailRoute,
	loginRoute,
	registerRoute,
	adminPannelRoute,
	editDogPannelRoute,
	createDogRoute,
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
