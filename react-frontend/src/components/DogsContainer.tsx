import { useEffect, useState } from 'react';
import { getDogsReqLimit, getDogsRequest } from '../api/dogs';
import { DogInterface } from '../interfaces/dog.interface';
import { Link } from 'react-router-dom';
interface DogsContainerProps {
	limit?: number;
}
export default function DogsContainer({ limit }: DogsContainerProps) {
	const [dogs, setDogs] = useState<DogInterface[]>([]);
	useEffect(() => {
		if (limit) {
			getDogsReqLimit(limit.toString()).then((data) => setDogs(data));
		} else {
			getDogsRequest().then((data) => setDogs(data));
		}
	}, [limit]);

	return (
		<>
			<main className='  mt-8 '>
				<div className='flex gap-4 flex-wrap justify-center  '>
					{dogs?.length > 0 &&
						dogs.map((dog) => (
							<Link
								to={`/dog-detail/${dog._id}`}
								key={dog._id}
								className=' rounded-2xl p-2  w-5/12 md:w-48 shadow-xl lg:w-64'
							>
								<div>
									<img
										src={dog.image}
										alt=''
										className=' rounded-2xl '
									/>
								</div>

								<div>
									<p className=' font-medium text-lg'>{dog.raze}</p>
									<p>
										Gene:
										<span className='  text-slate-700 font-medium'>
											{dog.gender}
										</span>
									</p>
									<p>
										Age:
										<span className='  text-slate-700 font-medium'>
											{dog.age}
										</span>
									</p>
								</div>
							</Link>
						))}
				</div>
			</main>
		</>
	);
}
