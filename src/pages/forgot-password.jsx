const ForgotPassword = () => {
    return (
        <div className="h-auto">
            <div className="m-auto w-[40%] my-[70px]">
                <p className="text-xl">Forgot your password?</p>
                <p className="text-sm text-neutral-400 my-2">Not to worry, just enter your email and we'll send you a link to set a</p>
                <p className="text-sm text-neutral-400 my-2">fresh, new password.</p>
                <input type="text" className='w-[600px] h-[55px] text-xs text-zinc-800 border border-neutral-700 pl-8 bg-neutral-900 my-3' placeholder='EMAIL' />
                <button className="text-sm bg-transparent text-gray-50 px-7 h-10 my-3">SUBMIT</button>
            </div>
        </div>
    )
}

export default ForgotPassword