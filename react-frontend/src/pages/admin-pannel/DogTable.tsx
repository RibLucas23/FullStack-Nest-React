import { Link } from 'react-router-dom';
import { DogInterface } from '../../interfaces/dog.interface';

interface Props {
	tableData: DogInterface[];
	handleDelete: (dog: DogInterface) => void;
}

export const DogTable = ({ tableData, handleDelete }: Props) => {
	const headers = tableData.length > 0 ? Object.keys(tableData[0]) : [];
	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full bg-white border border-gray-200'>
				<thead className='bg-secondary40'>
					<tr>
						{headers.map((header) => (
							<th
								key={header}
								className='py-2 px-4 border-b border-gray-200 text-gray-800 text-left'
							>
								{header.charAt(0).toUpperCase() + header.slice(1)}
							</th>
						))}
						<th className='py-2 px-4 border-b border-gray-200 text-gray-800 text-left'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((dog) => (
						<tr key={dog._id} data-key={dog._id}>
							{headers.map((header) => (
								<td
									key={`${dog._id}-${header}`}
									className='py-2 px-4 border-b border-gray-200'
								>
									{header === 'image' ? (
										<img
											src={dog[header]}
											alt={dog.name}
											className='w-16 h-16 object-cover'
										/>
									) : (
										dog[header as keyof DogInterface]
									)}
								</td>
							))}
							<td className='py-2 px-4 border-b border-gray-200'>
								<Link to={`/admin-pannel/edit/dog/${dog._id}`}>
									<button
										className='text-blue-500 hover:text-blue-700 mr-2'
										id={`edit-${dog._id}`}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-5 w-5'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path d='M17.414 2.586a2 2 0 00-2.828 0l-1.828 1.828 2.828 2.828 1.828-1.828a2 2 0 000-2.828zm-4.828 3.414L3 15v2.5a.5.5 0 00.5.5H6l9.586-9.586-2.828-2.828z' />
										</svg>
									</button>
								</Link>
								<button
									className='text-red-500 hover:text-red-700'
									id={`delete-${dog._id}`}
									onClick={() => handleDelete(dog)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M9 2a1 1 0 011-1h1a1 1 0 011 1h5a1 1 0 110 2H4a1 1 0 110-2h5zm-4 4h10v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6zm3 2a1 1 0 00-2 0v8a1 1 0 102 0V8zm4 0a1 1 0 00-2 0v8a1 1 0 102 0V8z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
