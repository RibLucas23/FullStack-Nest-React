import { homeRoute } from './pages/home/HomeRoute.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { productDetailRoute } from './pages/productDetail/productDetailRoute.tsx';
import { categoryRoute } from './pages/category/categoryRoute.tsx';

const router = createBrowserRouter([
	homeRoute,
	categoryRoute,
	productDetailRoute,
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
