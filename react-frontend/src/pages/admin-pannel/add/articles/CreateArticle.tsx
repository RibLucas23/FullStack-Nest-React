import { ToastContainer } from 'react-toastify';
import NavBar from '../../../../components/layout/NavBar';
import CreateFormArticle from './CreateFormArticle';

export default function CreateArticle() {
	return (
		<>
			<NavBar />
			<CreateFormArticle />
			<ToastContainer />
		</>
	);
}
