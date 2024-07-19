interface SectionTitlesProps {
	mainTitle: string;
	secTitle: string;
}
const SectionTitles: React.FC<SectionTitlesProps> = ({
	mainTitle,
	secTitle,
}) => {
	return (
		<>
			<div className='p-4 mt-6 md:mx-6'>
				<p className=' text-lg font-medium'>{mainTitle}</p>
				<h2 className=' text-primary font-bold text-xl'>{secTitle}</h2>
			</div>
		</>
	);
};

export default SectionTitles;
