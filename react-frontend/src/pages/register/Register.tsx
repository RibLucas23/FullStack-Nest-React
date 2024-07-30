import RegisterForm from './RegisterForm';

export default function Register() {
	return (
		<>
			<div className='flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl'>
				<div className='flex flex-row gap-3 pb-4 justify-center'>
					<div>
						<img src='/logo.png' width='150' alt='Logo' />
					</div>
				</div>
				<div className='text-sm font-light text-[#6B7280] pb-8'>
					Register your account
				</div>
				<RegisterForm />
				<div className='flex flex-row gap-2 justify-center'>
					<button className='flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-github'
						>
							<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
							<path d='M9 18c-4.51 2-5-2-7-2'></path>
						</svg>
						<span className='font-medium mx-auto'>Github</span>
					</button>
					<button className='flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-twitter'
						>
							<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
						</svg>
						<span className='font-medium mx-auto'>Twitter</span>
					</button>
				</div>
			</div>
		</>
	);
}
