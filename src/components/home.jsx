const Home = () => {
    const DUMMY_DATA = [
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
        {
            type: 'UNKNOWN',
            ip: '132.191.0.143',
            organization: 'Satellite Communication Limited',
            actor: 'unknown',
            last_seen: '2023-06-07',
            country: 'United Kingdom'
        },
    ]

    const DUMMY_SUMMARY_DATA = [
        {
            name: 'Top Countries',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                },
                {
                    country: 'Russia',
                    count: '21,465'
                },
                {
                    country: 'United Kingdom',
                    count: '14,341'
                },
            ]
        },
        {
            name: 'Classification',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                }
            ]
        },
        {
            name: 'Spoofable',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                }
            ]
        },
        {
            name: 'Top Tags',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                },
                {
                    country: 'Russia',
                    count: '21,465'
                },
                {
                    country: 'United Kingdom',
                    count: '14,341'
                },
            ]
        },
        {
            name: 'Top OS',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                },
            ]
        },
        {
            name: 'Top Actors',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                },
                {
                    country: 'Russia',
                    count: '21,465'
                },
            ]
        },
        {
            name: 'Top Organizations',
            results: [
                {
                    country: 'United States',
                    count: '144,345'
                },
                {
                    country: 'China',
                    count: '44,577'
                },
                {
                    country: 'France',
                    count: '34,305'
                }
            ]
        }
    ]
    return (
        <div className="auto flex px-[30px] pb-[65px] gap-8">
            <div className="w-1/4">
                <p className="mt-8 ml-0 mb-2 text-sm">302,489 results</p>
                <div className="bg-neutral-900 border border-neutral-700 px-3 py-5">
                    {DUMMY_SUMMARY_DATA.map(item => {
                        return (
                            <>
                                <p className="text-xl">{item.name}</p>
                                {item.results.length > 0 ? item.results.map(i => {
                                    return (
                                        <div className="flex justify-between text-sm text-gray-400">
                                            <div>
                                                <p className="py-3 border-solid border-0 border-b-[1.5px] border-neutral-400">{i.country}</p>
                                            </div>
                                            <div>
                                                <p className="py-3">{i.count}</p>
                                            </div>
                                        </div>
                                    )
                                }) : <></>}
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="w-3/4">
                <div className="flex flex-row-reverse text-center">
                <button className="px-6 py-3 my-3 mr-0 bg-black text-slate-50 text-xs border border-neutral-700">EXPORT</button>
                <button className="px-4 py-3 my-3 mr-4 bg-black text-slate-50 text-xs border border-neutral-700">CREATE ALERT</button>
                </div>
                {
                    DUMMY_DATA.map((item) => {
                        return (
                            <div className="border text-base border-neutral-700 bg-neutral-900 cursor-pointer px-4 py-5 mb-6">
                                <span className="p-1 border border-gray-400">{item.type}</span>
                                <h1 className="m-2 text-2xl ml-0">{item.ip}</h1>
                                <div className="flex gap-10 m-2 ml-0">
                                    <div><span className="text-neutral-400">ORGANIZATION:</span> {item.organization}</div>
                                    <div><span className="text-neutral-400">ACTOR: </span>{item.actor}</div>
                                    <div><span className="text-neutral-400">LAST SEEN:</span> {item.last_seen}</div>
                                </div>
                                <h4><span  className="text-neutral-400">COUNTRY: </span>{item.country}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home