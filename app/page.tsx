
import {PostCard} from '@/components/PostCard';
import {getPost} from '@/func/functions';
export default async function Home() {
	const post = await getPost();
	return (
		<main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
			{
				post.map(post => (
					<PostCard key={post.id} post={post}/>
				))
			}
		</main>
	);
}
