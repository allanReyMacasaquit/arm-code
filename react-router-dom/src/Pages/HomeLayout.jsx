import { Link } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div>
			<h1>
				HomeLayout
				<Link to='/about'>About Page</Link>
			</h1>
		</div>
	);
};
export default HomeLayout;
