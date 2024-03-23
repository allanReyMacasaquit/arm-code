import axios from 'axios';
import Wrapper from '../wrappers/CocktailPage';
import { useLoaderData } from 'react-router-dom';

const Cocktail = () => {
	const { id, data } = useLoaderData();
	return <Wrapper>Cocktail</Wrapper>;
};
export default Cocktail;

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
	const { id } = params;
	const { data } = await axios.get(`${singleCocktailUrl}${id}`);
	return { id, data };
};
