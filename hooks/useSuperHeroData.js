import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchSuperHero = ({ queryKey }) => {
	const heroSlug = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${heroSlug}`);
};

export const useSuperHeroeData = heroSlug => {
	const queryClient = useQueryClient();
	return useQuery(['super-hero', heroSlug], fetchSuperHero, {
		initialData: () => {
			const hero = queryClient
				.getQueryData('super-heroes')
				?.data?.find(hero => hero.id === parseInt(heroSlug));

			if (hero) {
				return {
					data: hero
				};
			} else {
				return undefined;
			}
		}
	});
};
