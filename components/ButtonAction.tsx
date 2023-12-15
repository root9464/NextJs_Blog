
'use client';
import axios from 'axios';
import {Pencil, Trash} from 'lucide-react';
import Link from 'next/link';
import {useMutation} from 'react-query';
import {useRouter} from 'next/navigation';
import {Loading} from './Loading';
const ButtonAction = ({id}: {id: string}): JSX.Element => {
	const route = useRouter();
	const {mutate: deletePost, isLoading} = useMutation({
		mutationFn: async () => axios.delete(`/api/posts/${id}`),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onMutate() {
			route.push('/');
			route.refresh();
		},
	});
	return (
		<div>
			<Link href={'/edit/1'} className='btn mr-2'><Pencil/> Edit</Link>
			<button onClick={() => {
				deletePost();
			}} className='btn btn-error'>
				{isLoading && <Loading />}
				{isLoading ? 'Deleting...' : <><Trash/>Delete</>}
			</button>
		</div>
	);
};

export {ButtonAction};
