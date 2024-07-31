import { Link } from 'react-router-dom';

interface Props {
	close: () => void;
}

export const NavBarMenu = ({ close }: Props) => {
	return (
		<>
			<nav className='absolute z-30'>
				<div className='flex w-full fixed   '>
					<div
						className={` flex flex-col h-svh w-52 px-4  rounded-tr-[50px] bg-secondary40`}
					>
						<button className='absolute top-4 left-4 ' onClick={close}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-6 '
							>
								<path
									fillRule='evenodd'
									d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
						<ul className='mt-16 font-semibold text-primary80 '>
							<Link to='/'>
								<li className='pb-4 px-6'>
									<img src='/logo.png' alt='Monito logo' />
								</li>
							</Link>
							<Link to={'/'}>
								<li className='py-2'>Home</li>
							</Link>
							<Link to={'/articles'}>
								<li className='py-2'>Articles</li>
							</Link>
							<Link to={'/about'}>
								<li className='py-2'>About</li>
							</Link>
							<Link to={'/contact'}>
								<li className='py-2'>Contact Us</li>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
