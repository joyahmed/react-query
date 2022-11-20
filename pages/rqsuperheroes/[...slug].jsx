import { useRouter } from 'next/router';
import { useSuperHeroeData } from '../../hooks/useSuperHeroData';

const RQSuperHero = () => {
	const { query } = useRouter();

	console.log(`heroSlug from :`, query?.slug?.toString());

	const { isLoading, data, isError, error } = useSuperHeroeData(
		query?.slug?.toString()
	);

	if (isLoading) return <h2>Loading</h2>;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<div>
			{data?.data.name} - {data.data.alterEgo}
		</div>
	);
};

export default RQSuperHero;
