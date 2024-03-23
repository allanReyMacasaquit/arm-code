import axios from 'axios';
import Wrapper from '../wrappers/CocktailPage';
import { Link, Navigate, useLoaderData } from 'react-router-dom';

const Cocktail = () => {
	const { data } = useLoaderData();

	if (!data) return <Navigate to='/' />;

	const singleDrink = data.drinks[0];

	const {
		strDrink: name,
		strAlcoholic: info,
		strCategory: category,
		strDrinkThumb: image,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink;

	const validIngredient = Object.keys(singleDrink)
		.filter(
			(key) => key.startsWith('strIngredient') && singleDrink[key] !== null
		)
		.map((key) => singleDrink[key]);

	return (
		<Wrapper>
			<header>
				<Link to='/' className='btn'>
					back to home
				</Link>
			</header>
			<section className='drink-container'>
				<div className='drink'>
					<img src={image} className='img' alt={name} />
					<div className='drink-info'>
						<p className='drink-data'>
							<span>name: </span>
							{name}
						</p>
						<p className='drink-data'>
							<span>category: </span>
							{category}
						</p>
						<p className='drink-data'>
							<span>info: </span>
							{info}
						</p>
						<p className='drink-data'>
							<span>glass: </span>
							{glass}
						</p>
						<p className='drink-data'>
							<span>Ingredients: </span>
							{validIngredient.map((item, index) => {
								return (
									<span className='ing' key={item}>
										{item}
										{index < validIngredient.length - 1 ? ',' : ''}
									</span>
								);
							})}
						</p>
						<p className='drink-data'>
							<span>instructions: </span>
							{instructions}
						</p>
					</div>
				</div>
			</section>
		</Wrapper>
	);
};
export default Cocktail;

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
	const { id } = params;
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
	return { id, data };
};
