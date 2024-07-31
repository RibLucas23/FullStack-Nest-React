import { Link, useParams } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import { DogInterface } from '../../interfaces/dog.interface';
import { useEffect, useState } from 'react';
import { getDogReqById } from '../../api/dogs';
import DogsContainer from '../../components/DogsContainer';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/layout/Footer';

export default function ProductDetail() {
	const { id } = useParams();
	const [dog, setDog] = useState<DogInterface>();
	useEffect(() => {
		if (id) {
			getDogReqById(id).then((data) => setDog(data));
		}
	}, [id]);
	return (
		<>
			<NavBar />
			<main className='md:flex'>
				<section className='w-full  md:w-1/2 flex justify-center '>
					<img
						src={dog?.image}
						className='w-full md:max-w-96'
						alt='image of the dog'
					/>
				</section>

				<section className='p-4 md:w-1/2 md:mr-10'>
					<h2 className=' font-semibold text-xl'>{dog?.raze}</h2>
					<article className=' flex gap-4 justify-around my-6'>
						<Link to={'/contact'}>
							<button className='  bg-primary text-white px-8 py-4 rounded-full'>
								Contact Us
							</button>
						</Link>
						<Link to={'/chat'}>
							<button className='  px-8 py-4 text-primary font-medium  border-primary border-2 rounded-full '>
								Chat with Monito
							</button>
						</Link>
					</article>

					<h3>Information</h3>
					<article className='flex flex-col items-start'>
						<div className='flex  w-full border-b-2 '>
							<p className=' w-1/2'>Gender</p>
							<p className=' '>
								:
								<span className=' pl-1'>
									{dog?.gender.toUpperCase()}
								</span>
							</p>
						</div>
						<div className='flex w-full border-b-2  '>
							<p className='  w-1/2'>Age</p>
							<p className=' '>
								:<span className=' pl-1'>{dog?.age}</span>
							</p>
						</div>
						<div className='flex w-full border-b-2  '>
							<p className='  w-1/2'>Size</p>
							<p className=' '>
								:
								<span className=' pl-1'>{dog?.size.toUpperCase()}</span>
							</p>
						</div>
						<div className='flex w-full border-b-2  '>
							<p className='  w-1/2'>Location</p>
							<p className=' '>
								:
								<span className=' pl-1'>
									{dog?.location.toUpperCase()}
								</span>
							</p>
						</div>
						<div className='flex  w-full border-b-2 '>
							<p className='  w-1/2'>Additional Information</p>
							<p className=' '>
								:<span className=' pl-1'>{dog?.description}</span>
							</p>
						</div>
					</article>
				</section>
				{/* Renderiza más información del producto aquí */}
			</main>
			<section className='p-4 mb-4'>
				<h3 className='font-bold text-2xl text-primary'>
					See more puppies
				</h3>
				<DogsContainer />
			</section>
			<Subscribe />
			<Footer />
		</>
	);
}
