/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {BackButton} from '@/components/BackButton';
import {ButtonAction} from '@/components/ButtonAction';
import {getDataPost} from '@/func/functions';

interface PropsBlog {
	params: {
		id: string;
	};
}
export default async function Blog({params}: PropsBlog) {
	const dataPost = await getDataPost(params.id);
	return (
		<>
			<div className='mb-8'>
				<BackButton/>
				<h2 className='text-2xl font-bold my-4'>{dataPost?.title}</h2>
				<ButtonAction id={params.id} />
			</div>
			<span className='badge badge-neutral'>{dataPost?.tag.name}</span>
			<p className='text-slate-700'>{dataPost?.content}</p>
		</>
	);
}
