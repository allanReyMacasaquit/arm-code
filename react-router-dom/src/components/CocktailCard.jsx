import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/CocktailCard';

const CocktailCard = ({ id, name, image, info, glass }) => {
	return (
		<Wrapper>
			<div className='image-container'>
				<img src={image} alt='name' className='img' />
			</div>
			<div className='footer'>
				<h4>{name}</h4>
				<h5>{glass}</h5>
				<p>{info}</p>
				<p>
					<Link
						to={`/cocktail/${id}`}
						style={{ fontSize: '26px', justifyContent: 'center' }}
						className='btn'
					>
						description
					</Link>
				</p>
			</div>
		</Wrapper>
	);
};
export default CocktailCard;
