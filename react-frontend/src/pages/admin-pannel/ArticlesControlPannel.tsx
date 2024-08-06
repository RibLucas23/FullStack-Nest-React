import React, { useEffect, useState } from 'react';
import { getArticlesRequest } from '../../api/articles';
import { TableContainer } from './TableContainer';

export default function ArticlesControlPannel() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticlesRequest().then((data) => setArticles(data));
	}, []);
	return (
		<>
			<TableContainer data={articles} />
		</>
	);
}
