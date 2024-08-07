import { useEffect, useState } from 'react';
import { DogInterface } from '../../interfaces/dog.interface';
import { getDogsReqLimit } from '../../api/dogs';
import { DogTable } from './DogTable';

export default function DogControlPannel() {
	const [dogs, setDogs] = useState<DogInterface[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	useEffect(() => {
		fetchDogs(currentPage);
	}, [currentPage]);

	const fetchDogs = async (page: number) => {
		const { data, totalPages } = await getDogsReqLimit('10', page.toString());
		setDogs(data);
		setTotalPages(totalPages);
	};

	const handlePageChange = (newPage: number) => {
		if (newPage > 0 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};
	const handleDelete = (dogToDelete: DogInterface) => {
		console.log('eliminar producto', dogToDelete._id);
	};

	return (
		<>
			<DogTable
				tableData={dogs}
				handleDelete={(item) => handleDelete(item)}
			/>
			<div className='flex justify-center mt-4'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className='px-4 py-2 bg-secondary rounded-l'
				>
					Previous
				</button>
				<span className='px-4 py-2 bg-secondary40'>{`Page ${currentPage} of ${totalPages}`}</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className='px-4 py-2 bg-secondary rounded-r'
				>
					Next
				</button>
			</div>
		</>
	);
}
