import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const handleMenuClick = () => setNavbar(!navbar)
    return (
        <div className='w-full h-[70px] z-10 drop-shadow-lg bg-neutral-950 text-gray-50'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-gray-50 ml-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    Satellite.
                </h1>
                    <ul className="hidden md:flex text-zinc-400 cursor-pointer items-center">
                        <li className='p-4 hover:text-gray-50'><input className='h-[45px] w-[350px] border border-slate-900 bg-zinc-900'/></li>
                        <li className='p-4 hover:text-gray-50'>TRENDS</li>
                        <li className='p-4 hover:text-gray-50'>TODAY</li>
                        <li className='p-4 hover:text-gray-50'>TAGS</li>
                        <li className='p-4 hover:text-gray-50'>ANALYSIS</li>
                        <li className='p-4 hover:text-gray-50'>ALERTS</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='bg-transparent text-gray-50 px-5 py-3 mr-5'>LOG IN</button>
                    <button className='px-5 py-3'>SIGN UP</button>
                </div>
                <div className='md:hidden text-gray-50 cursor-pointer' onClick={handleMenuClick}>
                    {!navbar ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                </div>
            </div>

            <div>
                <ul className={!navbar ? 'hidden' : 'absolute w-full px-8 text-gray-400 cursor-pointer'}>
                    <li className='p-4 hover:text-gray-50'><input className='h-[45px] w-[350px] border border- bg-zinc-900'/></li>
                    <li className='p-4 hover:text-gray-50'>TRENDS</li>
                    <li className='p-4 hover:text-gray-50'>TODAY</li>
                    <li className='p-4 hover:text-gray-50'>TAGS</li>
                    <li className='p-4 hover:text-gray-50'>ANALYSIS</li>
                    <li className='p-4 hover:text-gray-50'>ALERTS</li>
                    <div className='flex flex-col mb-4'>
                        <button className='text-gray-50 bg-transparent px-8 py-3 mb-4'>LOG IN</button>
                        <button className='px-8 py-3'>SIGN UP</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar