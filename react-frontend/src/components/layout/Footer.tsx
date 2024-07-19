import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<footer className='bg-secondary40 p-4 '>
				<div className='border-b-2 py-4'>
					<div className='flex justify-between px-4 text-primary  font-semibold'>
						<Link to={'/'}>Home</Link>
						<Link to={'/category'}>Category</Link>
						<Link to={'/about'}>About</Link>
						<Link to={'/contact'}>Contact</Link>
					</div>
					<div className='flex justify-center gap-8 mt-6'>
						<a href='https://www.facebook.com'>
							<img src='/fbIcon.png' alt='facebook icon' />
						</a>
						<a href='https://www.facebook.com'>
							<img src='/twIcon.png' alt='twitter icon' />
						</a>
						<a href='https://www.facebook.com'>
							<img src='/igIcon.png' alt='instagram icon' />
						</a>
						<a href='https://www.facebook.com'>
							<img src='/ytIcon.png' alt='youtube icon' />
						</a>
					</div>
				</div>
				<div className='flex flex-col items-center py-6'>
					<Link to='/'>
						<img src='/logo.png' className='md:w-36' alt='Monito logo' />
					</Link>

					<div className='flex gap-4 justify-center mt-6 text-primary60'>
						<p>Terms of Service</p>
						<p>Privacy Policy</p>
					</div>
				</div>
			</footer>
		</>
	);
}
