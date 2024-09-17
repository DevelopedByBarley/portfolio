import { IoMdStar } from 'react-icons/io'
import profile from '../assets/images/profile.jpg'

export const Header = () => {
    return (
        <header className='container xl:flex  mx-auto min-h-[80vh]'>
            {/* Left section with profile and stars this is good*/}
            <div className='flex items-center justify-center xl:w-1/3 p-5'>
                <div className='bg-mainOrange py-24 rounded-3xl md:w-1/2 2xl:w-full  p-5 h-full 3xl:h-[80%] flex flex-col items-center justify-center'>
                    <img src={profile} alt="Profile" className='rounded-full w-52 mx-auto' />
                    <div className='flex items-center justify-center my-5'>
                        <IoMdStar size={50} />
                        <IoMdStar size={50} />
                        <IoMdStar size={50} />
                        <IoMdStar size={50} />
                        <IoMdStar size={50} />
                    </div>
                </div>
            </div>

            {/* Right section with name and profession */}
            <div className='xl:w-2/3 xl:flex items-center text-white'>
                <div className='text-center xl:text-start space-y-2 3xl:space-y-10'>
                    <h1 className='font-pricedown text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-10xl'>SZANISZLÓ ÁRPÁD</h1>
                    <h2 className='font-pricedown text-3xl 2xl:text-5xl py-3'>FULL STACK WEB DEVELOPER</h2>
                </div>
            </div>
        </header>
    )
}
