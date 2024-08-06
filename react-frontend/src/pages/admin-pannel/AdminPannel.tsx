import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton';
import DogControlPannel from './DogControlPannel';
import ArticlesControlPannel from './ArticlesControlPannel';

export default function AdminPannel() {
	const navigate = useNavigate();
	const token = localStorage.getItem('access_token');
	const [section, setSection] = useState('dogs');

	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	}, [token, navigate]);

	const handleClick = (tag: string) => {
		setSection(tag);
	};

	return (
		<>
			<main>
				<LogoutButton />
				<div className='flex'>
					<div
						className={`px-6 py-4 rounded-t-2xl ${
							section === 'dogs'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('dogs')}
					>
						Dogs
					</div>
					<div
						className={`px-6 py-4 rounded-t-xl ${
							section === 'articles'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('articles')}
					>
						Articles
					</div>
					<div
						className={`px-6 py-4 rounded-t-xl ${
							section === 'users'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('users')}
					>
						Users
					</div>
				</div>
				{section === 'dogs' && <DogControlPannel />}
				{section === 'articles' && <ArticlesControlPannel />}
				{section === 'users' && <div>Users Control Panel</div>}
			</main>
		</>
	);
}
