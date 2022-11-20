import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHero = ({ queryKey }) => {
	const heroSlug = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${heroSlug}`);
};

export const useSuperHeroeData = heroSlug => {
	return useQuery(['super-hero', heroSlug], fetchSuperHero);
};
