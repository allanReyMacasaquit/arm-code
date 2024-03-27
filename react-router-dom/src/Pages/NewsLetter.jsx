import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	return null;
};

const NewsLetter = () => {
	return (
		<Form className='form' method='POST'>
			<h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>
				our newsletter
			</h3>
			<div className='form-row'>
				{/* name */}
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-input'
					name='name'
					id='name'
					required
					defaultValue='john'
				/>
				{/* lastName */}
				<label htmlFor='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-input'
					name='lastName'
					id='lastName'
					required
					defaultValue='doe'
				/>
				{/* email */}
				<label htmlFor='lastName' className='form-label'>
					email
				</label>
				<input
					type='email'
					className='form-input'
					name='email'
					id='email'
					required
					defaultValue='jdoe@gmail.com'
				/>
				<button type='submit' className='btn'>
					submit
				</button>
			</div>
		</Form>
	);
};
export default NewsLetter;
