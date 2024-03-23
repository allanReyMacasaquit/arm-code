import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
	const error = useRouteError();
	return (
		<div className='error-message'>
			<h3 style={{ marginBottom: '2rem' }}>This page has an Error...</h3>
			<span>{error.message}</span>
		</div>
	);
};
export default SinglePageError;
