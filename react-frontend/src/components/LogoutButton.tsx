import { logoutUser } from '../api/users';

const LogoutButton = () => {
	const handleLogout = async () => {
		try {
			await logoutUser();
		} catch (error) {
			console.error('Error logging out:', (error as Error).message);
		}
	};

	return (
		<button
			onClick={() => {
				void handleLogout();
			}}
			id='logoutButton'
			className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
		>
			Logout
		</button>
	);
};

export default LogoutButton;
