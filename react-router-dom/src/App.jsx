import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
	{
		path: '/',
		element: <h2>home page</h2>,
	},
	{
		path: '/about',
		element: (
			<div>
				<h2>about page</h2>
			</div>
		),
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
