import React from 'react';
import { ArticleInterface } from './../../interfaces/articles.interface';

export const Article: React.FC<ArticleInterface> = (articlePayload) => {
	return (
		<>
			<article className='flex flex-col p-4 m-2 shadow-xl rounded-2xl md:w-60 lg:w-1/3  '>
				<img
					src={articlePayload.imgUrl}
					alt='dog'
					className=' rounded-2xl mb-3'
				/>
				<div className='p-2 '>
					<span className=' bg-blueSea text-white px-4 py-2 rounded-2xl  '>
						Pet knowledge
					</span>
					<h3 className='my-2 mt-3 font-bold text-lg'>
						{articlePayload.title}
					</h3>
					<p>{articlePayload.description}</p>
				</div>
			</article>
		</>
	);
};
