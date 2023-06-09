const SignUp = () => {
    return (
        <div className="h-screen flex px-[30px] pb-[65px] gap-4">
            <div className="w-[35%] bg-neutral-900 border border-neutral-700 p-3">
                <p className="text-m">Satellite Account</p>
                <p className="text-xs">Get started with free account.</p>
                <div className="flex gap-4 mt-4">
                    <input className="w-1/2 p-3 bg-neutral-900 border border-neutral-700" placeholder="LAST NAME"/>
                    <input className="w-1/2 p-3 bg-neutral-900 border border-neutral-700" placeholder="FIRST NAME"/>
                </div>
            </div>
            <div className="w-[65%] bg-zinc-800">signup</div>
        </div>
    )
}

export default SignUp