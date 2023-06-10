const Alerts = () => {
    return (
        <div className="h-auto m-7">
            <h1 className="text-2xl">Account Settings</h1>
            <hr className="my-5 border-solid border-1 border-neutral-700"/>
            <div className="flex gap-3">
                <div className="w-[17%]">
                    <ul className="text-neutral-300">
                        <li className="my-7"><b>PLAN DETAILS</b></li>
                        <li className="my-7"><b>MY API KYE</b></li>
                        <li className="my-7"><b>MY ALERTS</b></li>
                        <li className="my-7"><b>ACCOUNT DETAILS</b></li>
                    </ul>
                    <hr className="my-5 border-solid border-1 border-neutral-700"/>
                    <ul  className="text-neutral-300">
                        <li className="my-7"><b>HELP</b></li>
                        <li className="my-7"><b>LOGOUT</b></li>
                    </ul>
                </div>
                <div className="w-[83%] my-3">
                    <h1 className="text-2xl">My Alerts</h1>
                    <div className="w-full h-[500px] border border-neutral-700 my-3 text-center">1</div>
                    <div className="w-full h-[350px] border border-neutral-700 my-6 text-center">2</div>
                </div>
            </div>
        </div>
    )
}

export default Alerts