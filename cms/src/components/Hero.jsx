import sound from '../assets/images/sound.svg';
const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>ARM_CODE</h1>
					<p>
						A passionate individual with a knack for problem-solving and
						innovation, <strong>Allan Rey Macasaquit</strong> has a background
						in software engineering. He is adept at navigating the intricate
						landscape of technology, particularly in JavaScript and the React
						framework. His dedication to learning and mastery of these tools
						allows him to craft elegant solutions to complex challenges. He
						thrives in collaborative environments, where he can leverage his
						skills to contribute meaningfully to projects. With a blend of
						creativity and technical prowess, he is poised to make a significant
						impact in the world of software development.
					</p>
				</div>
				<div className='img-container'>
					<img src={sound} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
