import axios from 'axios';
import { useRouter } from 'next/router';
import { useQueries } from 'react-query';

const fetchSuperHero = heroId => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = () => {
	const heroIds = [1, 2];

	const queryResults = useQueries(
		heroIds?.map(id => {
			return {
				queryKey: ['super-hero', id],
				queryFn: () => fetchSuperHero(id)
			};
		})
	);

	console.log({ queryResults });
	return <div>DynamicParallelQueries</div>;
};

export default DynamicParallelQueries;
