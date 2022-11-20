import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import Link from 'next/link'

const RQSuperHeroes = () => {
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

	if (isLoading || isFetching) return <h2>Loading...</h2>;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<div className='flex flex-col items-center justify-center w-screen h-[calc(100vh_-_7rem)] bg-gradient-to-b from-gray-900 via-black to-gray-900 space-y-5'>
			<h2 className='text-lg font-semibold'>RQ Super Heroes</h2>
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
				{/* {data?.map(heroName => (
					<div
						key={heroName}
						className='flex flex-col items-center justify-center w-full'
					>
						{heroName}
					</div>
				))} */}
			</div>
		</div>
	);
};

export default RQSuperHeroes;
