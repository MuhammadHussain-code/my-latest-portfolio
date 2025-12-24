import profileImage from '../../images/img-1.jpeg';

const AboutMeBio = () => {
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0 m-auto">
			<img src="https://drive.google.com/thumbnail?id=1KiwYpXcH6Dt79IAwZVQU8NqYEoirf0Bp&sz=w1000" className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left text-ternary-dark dark:text-ternary-light">
				<h1 className='text-2xl mb-4 '>M Hussain | Software Engineer & MERN Stack Developer</h1>
				<p className='text-lg'>
				Welcome to my portfolio! I'm M Hussain, a dedicated software engineer specializing in MERN stack development. With a proven track record of building dynamic and efficient web applications, including projects like <a 
			 style={{color:'red', textDecoration:'underline'}}	className="text-blue-500 underline" href="https://sendmea.io/" target='blank'>sendmea.io,</a> I excel in creating seamless user experiences. My skill set includes advanced proficiency in Next.js and Firebase, enabling me to deliver high-quality products by leveraging modern technologies. Explore my portfolio to see how I can help bring your ideas to life.
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
