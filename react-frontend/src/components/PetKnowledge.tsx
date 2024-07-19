import React from 'react';
import { Link } from 'react-router-dom';
import ArticleContainer from '../pages/pet-knowledge/ArticleContainer';

export default function PetKnowledge() {
	return (
		<>
			<ArticleContainer />
			<Link to={'/category'} className='flex justify-center p-4'>
				<button className=' px-8 py-4 w-full text-primary font-medium text-lg flex justify-center items-center  border-primary border-2 rounded-full'>
					View More
					<span className=' flex  ml-4   font-bold'>&gt;</span>
				</button>
			</Link>
		</>
	);
}
