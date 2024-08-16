import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton';
import DogControlPannel from './DogControlPannel';
import ArticlesControlPannel from './ArticlesControlPannel';
import NavBar from '../../components/layout/NavBar';

export default function AdminPannel() {
	const navigate = useNavigate();
	const token = localStorage.getItem('access_token');
	const [section, setSection] = useState('dog');

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
			<NavBar />

			<main>
				<LogoutButton />
				<Link to={`/create/${section}`}>
					<button className=' bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
						Add
					</button>
				</Link>
				<div className='flex'>
					<button
						className={`px-6 py-4 rounded-t-2xl ${
							section === 'dog'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('dog')}
					>
						Dogs
					</button>
					<button
						className={`px-6 py-4 rounded-t-xl ${
							section === 'article'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('article')}
					>
						Articles
					</button>
					<button
						className={`px-6 py-4 rounded-t-xl ${
							section === 'user'
								? 'bg-secondary40'
								: 'border border-secondary'
						}`}
						onClick={() => handleClick('user')}
					>
						Users
					</button>
				</div>
				{section === 'dog' && <DogControlPannel />}
				{section === 'article' && <ArticlesControlPannel />}
				{section === 'user' && <div>Users Control Panel</div>}
			</main>
		</>
	);
}
