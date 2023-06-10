const Login = () => {

    return (
        <div className="h-auto">
          <div className="m-auto w-[40%] my-[70px]">
            <p className="text-4xl">Sign In</p>
            <input type="text" className='w-[600px] h-[55px] text-xs text-zinc-800 border border-neutral-700 pl-8 bg-neutral-900 my-3' placeholder='EMAIL' />
            <input type="text" className='w-[600px] h-[55px] text-xs text-zinc-800 border border-neutral-700 pl-8 bg-neutral-900 my-3' placeholder='PASSWORD' />
            <div className="flex text-sm my-6 cursor-pointer">
              <p className="text-center border-solid border-0 border-b-[1.5px] border-orange-400"><a href="/forgot-password">Forgot you password?</a></p>
              <a href="/forgot-password">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[21px] w-5 border-solid border-0 border-b-[1.5px] border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="flex justify-between my-10">
              <button className="text-sm bg-transparent text-gray-50 px-7 h-10">LOGIN</button>
              <button className="text-sm bg-transparent text-gray-50 border border-neutral-500 px-7 h-10">LOGIN WITH GOOGLE
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
              </button>
            </div>
            <div className="flex text-sm my-6 cursor-pointer">
              <p className="text-center border-solid border-0 border-b-[1px] border-orange-400"><a href="/sign-up">Sign up</a></p>
              <a href="/sign-up"><svg xmlns="http://www.w3.org/2000/svg" className="h-[21px] w-5 border-solid border-0 border-b-[1.5px] border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg></a>
            </div>
          </div>
        </div>
    )
}

export default Login