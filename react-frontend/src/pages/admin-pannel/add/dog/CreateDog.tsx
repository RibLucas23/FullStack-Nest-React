import { ToastContainer } from 'react-toastify';
import NavBar from '../../../../components/layout/NavBar';
import CreateFormDog from './CreateFormDog';

export default function CreateDog() {
	return (
		<>
			<NavBar />
			<CreateFormDog />
			<ToastContainer />
		</>
	);
}
