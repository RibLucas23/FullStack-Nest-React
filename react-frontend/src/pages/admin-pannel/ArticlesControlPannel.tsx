import { useEffect, useState } from 'react';
import { deleteArticleRequest, getArticlesRequest } from '../../api/articles';
import { ArticleTable } from './ArticleTable';
import { ArticleInterface } from '../../interfaces/articles.interface';
import { errorAlert, successAlert } from '../../services/toastifyAlerts';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function ArticlesControlPannel() {
	const navigate = useNavigate();

	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticlesRequest().then((data) => setArticles(data));
	}, []);
	const handleDelete = async (articleToDelete: ArticleInterface) => {
		try {
			await deleteArticleRequest(articleToDelete._id);
			console.log('eliminar producto', articleToDelete._id);
			successAlert('Article Deleted!');
			setTimeout(() => {
				navigate(0);
			}, 3000);
		} catch (error) {
			if (error instanceof Error) {
				errorAlert(error.message);
			} else throw error;
		}
	};
	return (
		<>
			<ArticleTable
				tableData={articles}
				handleDelete={(item) => handleDelete(item)}
			/>
			<ToastContainer />
		</>
	);
}
