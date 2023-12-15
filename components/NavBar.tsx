import {BookOpenCheck} from 'lucide-react';
import Link from 'next/link';

const NavBar = (): JSX.Element => (
	<div className='navbar bg-neutral-100'>
		<div className='container'>
			<div className='flex-1'>
				<Link href='/' className='btn btn-ghost text-xl'><BookOpenCheck color='blue'/></Link>
			</div>
			<div className='flex-none'>
				<Link href='/create' className='btn btn-full btn-ghost'>Create post</Link>
			</div>
		</div>
	</div>
);

export {NavBar};
