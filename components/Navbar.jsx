import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='flex flex-row items-center justify-between w-screen h-14 px-14'>
			<div className='flex items-center justify-start w-1/3 font-bold'>
				<Link href='/'>React Query</Link>
			</div>
			<div className='flex items-center justify-around w-1/3 font-semibold text-sm'>
				<Link href='rqsuperheroes'>RQ Super Heroes</Link>
				<Link href='parallel'>RQ Heroes + Friends</Link>
				<Link href='superheroes'>Super Heroes</Link>
			</div>
		</div>
	);
};

export default Navbar;
