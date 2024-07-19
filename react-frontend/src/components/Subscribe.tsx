import React, { useState } from 'react';

export default function Subscribe() {
	const [email, setEmail] = useState<string>('');

	const handleSubmit = () => {
		console.log(email);
	};
	return (
		<section className='p-4 bg-secondary40  rounded-t-xl pt-12  md:px-10 lg:px-48'>
			<div className='bg-primary p-4  rounded-xl md:flex md:items-center lg:gap-6'>
				<h3 className=' text-white font-bold text-lg pb-4 md:max-w-60 lg:max-w-full'>
					Register now so you don't miss our programs
				</h3>
				<div className='md:w-full'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col w-full justify-between items-center border-2 rounded-lg  p-4 lg:flex-row bg-white border-[#F2F2F2] gap-4 md:flex-row  md:justify-center '
					>
						<input
							name='email'
							type='email'
							placeholder='Enter your Email'
							className='p-4 w-full border border-[#7b7b7b] rounded-lg'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button
							type='submit'
							className='bg-primary w-full p-4 text-white rounded-2xl md:w-60'
						>
							Subscribe Now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
