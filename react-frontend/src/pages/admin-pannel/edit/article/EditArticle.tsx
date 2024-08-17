import { ToastContainer } from 'react-toastify';
import NavBar from '../../../../components/layout/NavBar';
import EditFormArticle from './EditFormArticle';

export default function EditArticle() {
	return (
		<>
			<NavBar />
			<EditFormArticle />
			<ToastContainer />
		</>
	);
}
