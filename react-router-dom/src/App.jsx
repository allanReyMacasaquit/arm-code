import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	NewsLetter,
} from './Pages';
import { loader as LandingLoader } from './Pages/Landing';
import SinglePageError from './Pages/SinglePageError';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: LandingLoader,
			},
			{
				path: '/cocktail',
				element: <Cocktail />,
				errorElement: <SinglePageError />,
			},
			{
				path: '/newsletter',
				element: <NewsLetter />,
			},
			{
				path: '/error',
				element: <Error />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
