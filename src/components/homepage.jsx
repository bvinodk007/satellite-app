const Homepage = () => {
    return (
        <div className="px-[60px] pt-[20px] pb-[120px]">
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[200px] w-[200px] text-zinc-400 mt-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <p className='text-5xl text-zinc-400 tracking-[2rem] p-[40px]'>SATELLITE</p>
                <span className='pt-[40px]'><input type="text" className='w-[1000px] h-[60px] text-xs text-zinc-800 border border-neutral-800 pl-8 bg-neutral-900' placeholder='Search for IP Addresses, CVEs, Tags...' /></span>
            </div>
            <p className="text-sm text-neutral-400">Today's top Anomalies:</p>
            
        </div>
    )
}

export default Homepage