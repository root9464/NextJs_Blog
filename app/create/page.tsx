/* eslint-disable new-cap */
'use client';
import {BackButton} from '@/components/BackButton';
import {FormPost} from '@/components/FormPost';
import axios from 'axios';
import {type FormInputs} from '@/types';
import {type SubmitHandler} from 'react-hook-form';
import {useMutation} from 'react-query';
import {useRouter} from 'next/navigation';

export default function Create() {
	const createPost: SubmitHandler<FormInputs> = data => {
		CreatePost(data);
	};

	const route = useRouter();
	const {mutate: CreatePost, isLoading} = useMutation({
		mutationFn: async (data: FormInputs) => axios.post('/api/posts/create', data),
		onError(e: Error | unknown) {
			console.log(e);
		},
		onSuccess() {
			route.push('/');
			route.refresh();
		},
	});
	return (
		<div>
			<BackButton/>
			<h1 className='text-2xl my-4 font-bold '>Add new post</h1>
			<FormPost submit={createPost} isEditing={false}/>
		</div>
	);
}
