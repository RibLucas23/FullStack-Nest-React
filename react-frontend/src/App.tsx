import { homeRoute } from './pages/home/HomeRoute.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { productDetailRoute } from './pages/productDetail/productDetailRoute.tsx';
import { categoryRoute } from './pages/category/categoryRoute.tsx';
import { loginRoute } from './pages/login/LoginRoute.tsx';
import { registerRoute } from './pages/register/RegisterRoute.tsx';

const router = createBrowserRouter([
	homeRoute,
	categoryRoute,
	productDetailRoute,
	loginRoute,
	registerRoute,
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
