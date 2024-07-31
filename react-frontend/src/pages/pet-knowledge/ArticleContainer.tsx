import { useEffect, useState } from 'react';
import { Article } from './Article';
import { ArticleInterface } from '../../interfaces/articles.interface';
import { getArticlesRequest } from '../../api/articles';

export default function ArticleContainer() {
	const [articles, setArticles] = useState<ArticleInterface[]>([]);
	useEffect(() => {
		getArticlesRequest().then((data) => setArticles(data));
	}, []);
	return (
		<>
			<div className='flex flex-col md:flex-row md:justify-center lg:mx-8'>
				{articles?.length > 0 &&
					articles.map((article) => (
						<Article key={article._id} {...article} />
					))}
			</div>
		</>
	);
}
