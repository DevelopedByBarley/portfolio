import { IoMdStar } from 'react-icons/io'
import profile from '/assets/images/profile.jpg'
import Navbar from './Navbar'
import Animation from './Animation'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<>
			<Navbar />
			<Animation />
			<header className='container xl:flex  mx-auto xl:min-h-[80vh] relative'>
				{/* Left section with profile and stars this is good*/}
				<div className='flex items-center justify-center xl:w-1/3 p-5'>
					<div id='background' className='bg-mainOrange w-full h-full py-8 md:py-24 rounded-3xl md:w-1/2 xl:w-full 3xl:h-[80%] flex flex-col items-center justify-center'>
						<img src={profile} alt="Profile" className='rounded-full w-48 md:w-52 xl:w-64 mx-auto profile-img' />
						<div className='stars flex items-center justify-center my-5'>
							{[...Array(5)].map((_, i) => (
								<IoMdStar
									className='star text-mainDark'
									key={i}
									size={50}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Right section with name and profession */}
				<div id='header-text' className='xl:w-2/3 xl:flex justify-around items-center text-white'>
					<div className='text-center xl:text-start space-y-2 3xl:space-y-10'>
						<h1 className='font-pricedown text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-10xl [text-shadow:0_5px_8px_rgb(0,0,0)]'>SZANISZLÓ ÁRPÁD</h1>
						<h2 className='font-pricedown text-3xl 2xl:text-5xl py-3 [text-shadow:0_5px_8px_rgb(0,0,0)]'>JUNIOR FULL-STACK WEB DEVELOPER</h2>

					</div>
				</div>
				<div className='flex justify-center absolute bottom-[-50px] right-1/2'>
					<Link to='#about' className='scroll-smooth'>
						<IoArrowDownCircleOutline size={60} className='text-mainOrange animate-bounce cursor-pointer' /></Link>
				</div>

			</header >
		</>
	)
}
