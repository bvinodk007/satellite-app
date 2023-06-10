const SignUp = () => {
    return (
        <div className="h-screen flex p-[30px] pb-[65px] gap-4">
            <div className="w-[35%] bg-neutral-900 border border-neutral-700 p-4">
                <p className="text-2xl text-zinc-200 tracking-[0.15px] mt-3">Satellite Account</p>
                <p className="text-sm my-1">Get started with free account.</p>
                <div className="flex gap-4 mt-4">
                    <input className="w-1/2 p-3 bg-neutral-900 border border-neutral-700" placeholder="LAST NAME"/>
                    <input className="w-1/2 p-3 bg-neutral-900 border border-neutral-700" placeholder="FIRST NAME"/>
                </div>
                <input className="w-full p-3 bg-neutral-900 border border-neutral-700 mt-3" placeholder="EMAIL"/>
                <input className="w-full p-3 bg-neutral-900 border border-neutral-700 mt-3" placeholder="PASSWORD"/>
                <input className="w-full p-3 bg-neutral-900 border border-neutral-700 mt-3" placeholder="JOB TITLE(OPTIONAL)"/>
                <button className="w-full h-10 text-sm p-3 bg-black text-gray-50 mt-10">CREATE ACCOUNT</button>
                <div class="relative flex py-7 items-center">
                    <div class="flex-grow border-t border-neutral-700"></div>
                    <span class="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                    <div class="flex-grow border-t border-neutral-700"></div>
                </div>
                <button className="w-full h-10 text-sm p-3 bg-black border border-zinc-500 text-gray-50">GET STARTED WITH GOOGLE</button>
                <div>
                    <div className="flex justify-center text-sm text-neutral-400 m-4">
                        <div>
                        <p>Already have an account? <a href="/login" className="border-solid border-0 border-b-[1.5px] border-orange-400">Login</a></p>
                        </div>
                        <div>
                            <a href="/login">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-5 border-solid border-0 border-b-[1.5px] border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                            
                    
                </div>
            </div>
            <div className="w-[65%]">
                <h1 className="text-3xl">The "go-to" tool for security analysts.</h1>
                <p className="text-sm my-3">The GreyNoise platform allows you to quickly identify noisy scanners and opportunistic attacks.</p>
                <div className="flex">
                    <div className="mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-base my-1"><b>Look up scanner IPs</b></p>
                    </div>
                </div>
                <p className="text-sm ml-16 my-2">Using the web-based Visualizer, get detailed context on IP addresses that scan and</p>
                <p className="text-sm ml-16 my-2">attack the internet.</p>
                <div className="flex">
                    <div className="mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-base my-1"><b>Identify trending internet attacks</b></p>
                    </div>
                </div>
                <p className="text-sm ml-16 my-2">Using GreyNoise Trends, track the volume of threat activity in the wild for specific</p>
                <p className="text-sm ml-16 my-2">vulnerabilities, CVEs, attack types, tools and actors.</p>
                <div className="flex">
                    <div className="mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-base my-1"><b>Automatically enrich your security data</b></p>
                    </div>
                </div>
                <p className="text-sm ml-16 my-2">Using the Community API, automatically enrich your IP data with GreyNoise intent</p>
                <p className="text-sm ml-16 my-2">classification and timeframe.</p>
                <div className="w-full flex gap-2">
                    <div className="bg-neutral-900 px-[230px] py-[130px] border border-neutral-700">1</div>
                    <div className="bg-neutral-900 px-[230px] py-[130px] border border-neutral-700">2</div>
                </div>
                <div className="flex justify-center my-3 text-sm text-zinc-400">
                    <p>INTEGRATIONS</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp