import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
	const searchTerm = '';
	const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
	const { searchTerm, drinks } = useLoaderData();
	return (
		<h2>
			<CocktailList drinks={drinks} />
		</h2>
	);
};
export default Landing;
