import { Link } from 'react-router-dom';
import DogsContainer from '../../components/DogsContainer';
import PetKnowledge from '../../components/PetKnowledge';
import SectionTitles from '../../components/SectionTitles';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/layout/Footer';
import NavBar from '../../components/layout/NavBar';
import HomeBanner from './HomeBanner';

export default function Home() {
	const limit = 6;
	return (
		<>
			<NavBar />
			<HomeBanner />
			<section>
				<SectionTitles
					mainTitle='Whats new?'
					secTitle='Take A Look At Some Of Our pets'
				/>
				<DogsContainer limit={limit} />
				<Link to={'/category'} className='flex justify-center p-4'>
					<button className=' px-8 py-4 w-full text-primary font-medium text-lg flex justify-center items-center  border-primary border-2 rounded-full'>
						View More
						<span className=' flex  ml-4   font-bold'>&gt;</span>
					</button>
				</Link>
			</section>
			<section>
				<SectionTitles
					mainTitle='You already know ?'
					secTitle='Useful pet knowledge'
				/>
				<PetKnowledge />
			</section>
			<Subscribe />
			<Footer />
		</>
	);
}
