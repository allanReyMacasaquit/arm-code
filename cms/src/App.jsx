import Hero from './components/Hero';
import useFetchProjects from './contentful_cms';
function App() {
	const { loading, projects } = useFetchProjects();
	console.log(loading, projects);
	return (
		<main>
			<Hero />
		</main>
	);
}

export default App;
