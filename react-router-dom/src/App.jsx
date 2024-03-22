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

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: LandingLoader,
			},
			{
				path: '/cocktail',
				element: <Cocktail />,
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
