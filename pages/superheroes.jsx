import axios from 'axios';
import { useEffect, useState } from 'react';

const SuperHeroes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:4000/superheroes')
			.then(res => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch(error => {
				setError(error.message);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return <h2>Loading...</h2>;
	if (error) return <h2>{error}</h2>;

	return (
		<div className='flex flex-col items-center justify-center w-screen h-[calc(100vh_-_7rem)] bg-gradient-to-b from-gray-900 via-black to-gray-900 space-y-5'>
			<h2 className='text-lg font-semibold'>All Super Heroes</h2>
			<div className='flex flex-col items-center justify-center border-[1px] p-4 rounded-sm w-1/2'>
				{data?.map(hero => (
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

export default SuperHeroes;
