const Trends = () => {
    const DUMMY_TRENDS = [
        {
            name: 'Bytespider',
            category: 'Actor',
            intent: 'Benign',
            intent_color: 'green',
            cves: 'unknown',
            percent: '65%'
        },
        {
            name: 'IBM Satellite inspector sol',
            category: 'Activity',
            intent: 'Malicious',
            intent_color: 'red',
            cves: 'Grenn, Threats',
            percent: '95%'
        },
        {
            name: 'Loginsoft Cyber Analyser',
            category: 'Actor',
            intent: 'Malicious',
            intent_color: 'green',
            cves: 'Cross Origin',
            percent: '59%'
        },
        {
            name: 'Bytespider',
            category: 'Actor',
            intent: 'Benign',
            intent_color: 'red',
            cves: 'unknown',
            percent: '65%'
        },
        {
            name: 'Bytespider',
            category: 'Actor',
            intent: 'Benign',
            intent_color: 'green',
            cves: 'unknown',
            percent: '65%'
        },
        {
            name: 'Bytespider',
            category: 'Actor',
            intent: 'Benign',
            intent_color: 'green',
            cves: 'unknown',
            percent: '65%'
        },
        {
            name: 'Satellite RADAR sys & co.',
            category: 'Actor',
            intent: 'Benign',
            intent_color: 'red',
            cves: 'unknown',
            percent: '65%'
        },
    ]
    return (
        <div className="m-7">
            <h1 className="text-2xl">Tag Trends</h1>
            <p className="text-sm my-1">GreyNoise tags are a signature-based detection method used to identify</p>
            <p className="text-sm my-1">actors, tools, and CVEs in our data.</p>
            <div className="flex text-sm my-2 cursor-pointer">
              <p className="text-center border-solid border-0 border-b-[1px] border-orange-400"><a href="#">View all tags</a></p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[21px] w-5 border-solid border-0 border-b-[1.5px] border-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <ul className="flex mt-10 border-solid border-0 border-b-[.5px] border-neutral-600 cursor-pointer">
                <li className="px-4 py-2 text-zinc-400 hover:bg-neutral-900">TRENDING</li>
                <li className="px-4 py-2 text-zinc-400 hover:bg-neutral-900">ANAMOLIES</li>
                <li className="px-4 py-2 text-zinc-400 hover:bg-neutral-900">MOST ACTIVE</li>
                <li className="px-4 py-2 text-zinc-400 hover:bg-neutral-900">MOST RECENT</li>
            </ul>
            <div className="h-[180px] bg-neutral-900 border border-neutral-700 my-2">
                <h1 className="text-lg p-5 border border-neutral-700">What are trending tags?</h1>
                <div className="flex items-center">
                    <img className="h-[108px] w-[120px]" src="/trend.jpeg" alt="/" />
                    <p className="text-sm p-5">GreyNoise classifies a tag as trending when our sensors observe a significant increase in the average number of IPs transmitting traffic within a 3 day period.</p>
                </div>
            </div>
            {
                DUMMY_TRENDS.map(item => {
                    return (
                        <div className="h-[100px] bg-neutral-900 border border-neutral-700 mb-2 cursor-pointer">
                            <h1 className="text-base p-5"><b>{item.name}</b></h1>
                            <ul className="flex justify-between text-sm text-neutral-300 mx-5">
                                <li>CATEGORY: {item.category}</li>
                                <li>INTENT: <span className={`text-${item.intent_color}-400`}>{item.intent}</span></li>
                                <li>CVES: {item.cves}</li>
                                <li>PERCENT CHANGE: <span className={` text-red-600`}>{item.percent}</span></li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trends