const API = 'http://localhost:3000';

export const getArticlesRequest = async () => fetch(`${API}/articles`);
