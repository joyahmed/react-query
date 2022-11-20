import Link from 'next/link';
import { useState } from 'react';
import {
	useAddSuperHeroData,
	useSuperHeroesData
} from '../hooks/useSuperHeroesData';

const RQSuperHeroes = () => {
	const [name, setName] = useState('');
	const [alterEgo, setAlterEgo] = useState('');

	const onSuccess = data => {
		console.log('Perform side effect after data fetching =>', data);
	};

	const onError = data => {
		console.log(
			'Perform side effect after encountering error =>',
			data
		);
	};

	const { isLoading, data, isError, error, isFetching, refetch } =
		useSuperHeroesData(onSuccess, onError);

	const {
		mutate: addHero,
		isLoading: addHeroLoading,
		isError: addHeroIsError,
		error: addHeroError
	} = useAddSuperHeroData();

	const handleAddHero = () => {
		console.log({ name, alterEgo });
		const hero = { name, alterEgo };
		addHero(hero);
	};

	if (isLoading || isFetching) return <h2>Loading...</h2>;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<div className='flex flex-col items-center justify-center w-screen h-[calc(100vh_-_7rem)] bg-gradient-to-b from-gray-900 via-black to-gray-900 space-y-5'>
			<h2 className='text-lg font-semibold'>RQ Super Heroes</h2>

			<div className='flex flex-col items-center justify-center space-y-3'>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					className='bg-transparent focus:outline-none border-[1px] rounded-md px-2 py-1.5'
				/>
				<input
					type='text'
					value={alterEgo}
					onChange={e => setAlterEgo(e.target.value)}
					className='bg-transparent focus:outline-none border-[1px] rounded-md px-2 py-1.5'
				/>
				<button onClick={handleAddHero}>Add Hero</button>
			</div>

			<button onClick={refetch}>Fetch Heroes</button>
			<div className='flex flex-col items-center justify-center border-[1px] p-4 rounded-sm w-1/2'>
				{data?.data?.map(hero => (
					<div
						key={hero.name}
						className='flex flex-col items-center justify-center w-full'
					>
						<Link href={`rqsuperheroes/${hero.id}`}>{hero.name}</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RQSuperHeroes;
