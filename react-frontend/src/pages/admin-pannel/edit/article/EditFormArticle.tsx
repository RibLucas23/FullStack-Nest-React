import React, { useEffect, useState } from 'react';
import { errorAlert, successAlert } from '../../../../services/toastifyAlerts';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleInterface } from '../../../../interfaces/articles.interface';
import {
	getArticleReqById,
	updateArticleRequest,
} from '../../../../api/articles';

export default function EditFormArticle() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [article, setArticle] = useState<ArticleInterface>({
		_id: '',
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
			await updateArticleRequest(article._id, article);
			successAlert('Article Updated!');
			setTimeout(() => {
				navigate('/admin-pannel');
			}, 3000);
		} catch (error) {
			if (error instanceof Error) {
				errorAlert(error.message);
			} else throw error;
		}
	};
	useEffect(() => {
		if (id) {
			getArticleReqById(id).then((data) => setArticle(data));
		}
	}, [id]);
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
						className='w-full p-2 border  h-auto border-primary40 rounded focus:outline-none focus:ring-2 focus:ring-primary40'
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
