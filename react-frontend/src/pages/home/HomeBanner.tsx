export default function HomeBanner() {
	return (
		<div className='  bg-secondary40 px-4 rounded-b-2xl lg:flex'>
			<div className=' pt-8 lg:w-1/2 lg:ml-12'>
				<div className=' text-primary80 '>
					<h1 className=' text-4xl font-bold'>One More Friend</h1>
					<h2 className='text-2xl font-bold my-2 '>Thousands More Fun!</h2>
				</div>
				<p className=' text-primary font-medium my-2'>
					Having a pet means you have more joy, a new friend, a happy
					person who will always be with you to have fun. We have 200+
					different pets that can meet your needs!
				</p>
				<div className='flex justify-between mt-8 px-4 lg:justify-evenly '>
					<button className=' px-8 py-4 text-primary font-medium  border-primary border-2 rounded-full'>
						Contact Us
					</button>

					<button className=' bg-primary text-white px-8 py-4 rounded-full'>
						Explore Now
					</button>
				</div>
			</div>
			<div className='flex justify-center w-full'>
				<img src='/dogsGroup.png' alt='' />
			</div>
		</div>
	);
}
