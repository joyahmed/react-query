import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex flex-row items-center justify-between w-screen h-14 px-14'>
			<div className='flex items-center justify-start w-1/4 font-bold'>
				<Link href='/'>React Query</Link>
			</div>
			<div className='flex items-center justify-around w-3/4 font-semibold text-xs'>
				<Link href='rqsuperheroes'>RQ Super Heroes</Link>
				<Link href='parallel'>RQ Parallel</Link>
				<Link href='dynamic-parallel'>RQ Dynamic Parallel</Link>
				<Link href='superheroes'>Super Heroes</Link>
			</div>
		</div>
	);
};

export default Navbar;
