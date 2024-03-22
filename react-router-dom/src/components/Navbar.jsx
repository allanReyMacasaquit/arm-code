import { NavLink } from 'react-router-dom';

const links = [
	{ id: 1, text: 'home', url: '/' },
	{ id: 2, text: 'about', url: '/about' },
	{ id: 3, text: 'newsletter', url: '/newsletter' },
];

const Navbar = () => {
	return (
		<nav>
			<div className='nav-center'>
				<span className='logo'>
					Mix
					<span style={{ color: 'purple' }}> Master</span>
				</span>
				<div className='nav-links'>
					{links.map(({ id, text, url }) => (
						<NavLink key={id} to={url} className='nav-link'>
							{text}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
