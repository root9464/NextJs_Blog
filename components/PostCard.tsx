/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {type Tag} from '@prisma/client';
import Link from 'next/link';

interface PostProps {
	post: {
		id: string;
		title: string;
		content: string;
	};
}
const PostCard = ({post}: PostProps) => (
	<div className='card w-full bg-base-100 shadow-xl border'>
		<div className='card-body'>
			<h2 className='card-title'>{ post.title}</h2>
			<p>{ post.content}</p>
			<div className='card-actions justify-end'>
				<Link href={`/blog/${post.id}`} className='btn btn-primary'>Read more...</Link>
			</div>
		</div>
	</div>

);

export {PostCard};
