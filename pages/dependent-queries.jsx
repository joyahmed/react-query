import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserByEmail = email => {
	return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = channelId => {
	return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email = 'joy@gmail.com' }) => {
	const { data: user } = useQuery(['user', email], () =>
		fetchUserByEmail(email)
	);

	const channelId = user?.data?.channelId;

	const { data: courses } = useQuery(
		['courses', channelId],
		() => fetchCoursesByChannelId(channelId),
		{
			enabled: !!channelId
		}
	);

	return <div>DependentQueries</div>;
};

export default DependentQueries;
