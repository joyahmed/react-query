import axios from 'axios';
import { useQuery } from 'react-query';


const fetchSuperHeroes = () => {
	return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroes = () => {
	const { isLoading, data, isError, error } = useQuery(
		'super-heroes',
		fetchSuperHeroes
	);

	if (isLoading) return <h2>Loading...</h2>;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<div className='flex flex-col items-center justify-center w-screen h-[calc(100vh_-_7rem)] bg-gradient-to-b from-gray-900 via-black to-gray-900 space-y-5'>
			<h2 className='text-lg font-semibold'>RQ Super Heroes</h2>
			<div className='flex flex-col items-center justify-center border-[1px] p-4 rounded-sm w-1/2'>
				{data?.data?.map(hero => (
					<div
						key={hero.name}
						className='flex flex-col items-center justify-center w-full'
					>
						{hero.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default RQSuperHeroes;
