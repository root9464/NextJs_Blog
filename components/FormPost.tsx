/* eslint-disable @typescript-eslint/no-unsafe-return */

'use client';
import {type FormInputs} from '@/types';
import {type Tag} from '@prisma/client';
import axios from 'axios';
import {type FC} from 'react';
import {useForm, type SubmitHandler} from 'react-hook-form';
import {useQuery} from 'react-query';
import {Loading} from './Loading';

type FormProps = {
	pash: SubmitHandler<FormInputs>;
	isEditing: boolean;
};
const FormPost: FC<FormProps> = ({pash, isEditing}) => {
	const {register, handleSubmit} = useForm<FormInputs>();
	const {data: dataTags, isLoading: isLoadingTags} = useQuery<Tag[]>({
		queryKey: ['tags'],
		async queryFn() {
			const res = await axios.get('/api/tags');
			return res.data;
		},
	});
	return (
		<form onSubmit={handleSubmit(pash)} className='flex flex-col items-center justify-center gap-5 mt-10'>
			<input {...register('title', {required: true})} type='text' placeholder='post title' className='input input-bordered w-full max-w-lg' />
			<textarea {...register('content', {required: true})} className='textarea textarea-bordered w-full max-w-lg' placeholder='post content'></textarea>
			{
				isLoadingTags ? <Loading/>
					: (
						<select {...register('tagId', {required: true})} defaultValue={''} className='select select-bordered w-full max-w-lg'>
							<option disabled value=''>Select tags</option>
							{dataTags?.map(tag => (
								<option key={tag.id} value={tag.id}>
									{tag.name}
								</option>
							))}
						</select>
					)
			}
			<button type='submit' className='btn btn-primary w-full max-w-lg'>
				{isEditing ? 'Update' : 'Create'}
			</button>
		</form>
	);
};

export {FormPost};

