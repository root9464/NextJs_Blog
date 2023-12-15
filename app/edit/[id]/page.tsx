import {FormPost} from '@/components/FormPost';
import {type FormInputs} from '@/types';

export default function Edit() {
	const editPost = (data: FormInputs) => {
		console.log(data);
	};

	return (
		<div>
			<h1 className='text-2xl my-4 font-bold '>Edit post</h1>
			<FormPost pash={editPost} isEditing={false}/>
		</div>
	);
}
