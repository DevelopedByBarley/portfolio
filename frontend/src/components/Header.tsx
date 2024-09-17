import { IoMdStar } from 'react-icons/io'
import profile from '../assets/images/profile.jpg'

export const Header = () => {
    return (
        <header className='bg-mainDark'>
            {/* Left section with profile and stars */}
            <div className='bg-yellow-400 p-5'>
                <div>
                    <img src={profile} alt="Profile" className='rounded-full' />
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
            <div className='bg-red-500'>
                <div className='text-center space-y-2 py-10'>
                    <h1 className='font-pricedown text-7xl'>SZANISZLÓ ÁRPÁD</h1>
                    <h2 className='font-pricedown text-3xl'>FULL STACK WEB DEVELOPER</h2>
                </div>
            </div>
        </header>
    )
}
