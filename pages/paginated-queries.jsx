import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchColors = pageNumber => {
	return axios.get(
		`http://localhost:4000/colors?_limit=4&_page=${pageNumber}`
	);
};

const PaginatedQueriesPage = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { isLoading, isError, error, data, isFetching } = useQuery(
		['colors', pageNumber],
		() => fetchColors(pageNumber),
		{
			keepPreviousData: true
		}
	);

	if (isLoading || isFetching) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	return (
		<div className='flex flex-col items-center justify-center w-screen h-[calc(100vh_-_7rem)] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white'>
			<div className='flex flex-col items-center justify-center min-w-[100vw] min-h-[20rem]'>
				{data?.data.map(color => {
					return (
						<div key={color.id}>
							<h2>
								{color.id}. {color.label}
							</h2>
						</div>
					);
				})}
			</div>
			<div className='flex flex-row items-center justify-center w-full space-x-4'>
				<button
					onClick={() => setPageNumber(page => page - 1)}
					disabled={pageNumber === 1}
				>
					Prev Page
				</button>
				<button
					onClick={() => setPageNumber(page => page + 1)}
					disabled={pageNumber === 2}
				>
					Next Page
				</button>
			</div>
		</div>
	);
};
export default PaginatedQueriesPage;
