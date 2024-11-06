import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-2xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p className="text-base" >
					I'm a 3rd-year <span className="bg-blue-100 px-1 rounded">Biomedical Engineering student</span> at the<span className="bg-blue-100 px-1 rounded">University of Waterloo</span>, with a passion for the intersection between <span className="bg-blue-100 px-1 rounded">healthcare and technology</span>. 
  My academic, internship, and project experiences span wearable device research, machine learning applications, and exploring new technologies.
  
  <br />
						<br />
  <a className="text-sm mt-2 block">✉️ {personalInfo.about.email}</a>
					</p>
					
					
				</div>
			</div>
		</section>
	);
};

export default About;
