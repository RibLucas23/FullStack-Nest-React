import { useEffect, useState } from 'react';
import { getArticlesRequest } from '../../api/articles';
import { ArticleTable } from './ArticleTable';
import { ArticleInterface } from '../../interfaces/articles.interface';

export default function ArticlesControlPannel() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticlesRequest().then((data) => setArticles(data));
	}, []);
	const handleDelete = (articleToDelete: ArticleInterface) => {
		console.log('eliminar producto', articleToDelete._id);
	};
	return (
		<>
			<ArticleTable
				tableData={articles}
				handleDelete={(item) => handleDelete(item)}
			/>
		</>
	);
}
