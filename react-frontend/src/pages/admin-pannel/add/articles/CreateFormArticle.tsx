import React, { useState } from 'react';
import { errorAlert, successAlert } from '../../../../services/toastifyAlerts';
import { useNavigate } from 'react-router-dom';
import { CreateArticleInterface } from '../../../../interfaces/articles.interface';
import { createArticlesRequest } from '../../../../api/articles';

export default function CreateFormArticle() {
	const navigate = useNavigate();

	const [article, setArticle] = useState<CreateArticleInterface>({
		description: '',
		title: '',
		image: '',
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setArticle({
			...article,
			[name]: value,
		});
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createArticlesRequest(article);
			successAlert('Article Created!');
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
						Title:
					</label>
					<input
						type='text'
						name='title'
						value={article.title}
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
						value={article.description}
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
						value={article.image}
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
