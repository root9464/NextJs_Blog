'use client';
import {ChevronLeft} from 'lucide-react';
import {useRouter} from 'next/navigation';

const BackButton = (): JSX.Element => {
	const router = useRouter();
	return (
		<button className='btn' onClick={() => {
			router.back();
		}}><ChevronLeft/>Back</button>
	);
};

export {BackButton};
