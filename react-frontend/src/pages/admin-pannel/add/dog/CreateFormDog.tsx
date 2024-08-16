import React, { useState } from 'react';
import { createDogRequest } from '../../../../api/dogs';
import { errorAlert, successAlert } from '../../../../services/toastifyAlerts';
import { useNavigate } from 'react-router-dom';
import { CreateDogInterface } from '../../../../interfaces/createDog.interface';

export default function CreateFormDog() {
	const navigate = useNavigate();

	const [dog, setDog] = useState<CreateDogInterface>({
		name: '',
		description: '',
		raze: '',
		location: '',
		size: '',
		age: '',
		gender: '',
		image: '',
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setDog({
			...dog,
			[name]: value,
		});
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createDogRequest(dog);
			successAlert('Dog Created!');
			setTimeout(() => {
				navigate('/admin-pannel');
			}, 3000);
		} catch (error) {
			if (error instanceof Error) {
				errorAlert(error.message);
			} else throw error;
		}
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='bg-secondary p-6 rounded-lg shadow-lg max-w-md mx-auto'
			>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Name:
					</label>
					<input
						type='text'
						name='name'
						value={dog.name}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Description:
					</label>
					<textarea
						name='description'
						value={dog.description}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Raze:
					</label>
					<input
						type='text'
						name='raze'
						value={dog.raze}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Location:
					</label>
					<input
						type='text'
						name='location'
						value={dog.location}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Size:
					</label>
					<input
						type='text'
						name='size'
						value={dog.size}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Age:
					</label>
					<input
						type='text'
						name='age'
						value={dog.age}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Gender:
					</label>
					<input
						type='text'
						name='gender'
						value={dog.gender}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<div className='mb-4'>
					<label className='block text-primary text-sm font-bold mb-2'>
						Image URL:
					</label>
					<input
						type='text'
						name='image'
						value={dog.image}
						onChange={handleChange}
						className='w-full p-2 border border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-primary text-secondary py-2 px-4 rounded hover:bg-primary60 focus:outline-none focus:ring-2 focus:ring-primary40'
				>
					Save
				</button>
			</form>
		</>
	);
}
