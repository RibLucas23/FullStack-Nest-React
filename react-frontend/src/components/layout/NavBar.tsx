import { Link } from 'react-router-dom';
import { NavBarMenu } from './NavBarMenu';
import { useState } from 'react';
export default function NavBar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <NavBarMenu close={() => setOpen(false)} />}{' '}
			<nav className='flex justify-between p-4 py-6 items-center'>
				<div>
					<button onClick={() => setOpen(true)} id='navBarMenu'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-8'
						>
							<path
								fill-rule='evenodd'
								d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
				</div>

				<div>
					<Link to='/'>
						<img src='/logo.png' className='md:w-36' alt='Monito logo' />
					</Link>
				</div>

				<div>
					{/* <button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-8'
						>
							<path
								fill-rule='evenodd'
								d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
								clip-rule='evenodd'
							/>
						</svg>
					</button> */}
				</div>
			</nav>
		</>
	);
}
