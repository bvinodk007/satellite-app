const Tags = () => {
    const DUMMY_TAGS = [
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },
        {
            name: 'ORACLE GLASSFISH DIRECTORY TRAVERSAL ATTEMPT',
            intention: 'Benign',
            category: 'Actor',
            description: 'IP addresses with this tag are being used in security risk scanning by FortifyData, a risk management company.',
            references: 'https://fortifydata.com/assessment-traffic-source/'
        },

    ]
    return (
        <div className="h-auto border border-neutral-700 bg-neutral-900 m-7">
            <ul className="flex gap-4 p-4 mb-6">
                <li><input className="w-[1000px] h-[55px] text-stone-500 text-sm tracking-[1px] border border-neutral-700 bg-neutral-900 px-5" placeholder="SEARCH"/></li>
                <li className="w-[200px] h-[55px] text-stone-500 text-sm tracking-[1px] border border-neutral-700 bg-neutral-900 px-5">
                    <label htmlFor="intent">INTENT
                    <select name="intent" id="intent" className="text-stone-500 text-sm tracking-[1px] bg-neutral-900">
                        <option value="1">All</option>
                        <option value="2">Benign</option>
                        <option value="3">Malicious</option>
                        <option value="4">Unknown</option>
                    </select>
                    </label>
                </li>
                <li className="w-[200px] h-[55px] text-stone-500 text-sm tracking-[1px] border border-neutral-700 bg-neutral-900 px-5">
                    <label htmlFor="category">CATEGORY
                    <select name="category" id="intent" className="text-stone-500 text-sm tracking-[1px] bg-neutral-900">
                        <option value="1">All</option>
                        <option value="2">Actor</option>
                        <option value="3">Activity</option>
                        <option value="4">Search Engine</option>
                        <option value="5">Tool</option>
                        <option value="6">Worm</option>
                    </select>
                    </label>
                </li>
            </ul>
            {DUMMY_TAGS.map(item => {
                return (
                    <div className="h-[150px] text-sm mx-5 mb-10">
                        <span className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 border border-neutral-700 text-green-500 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <span className="p-1 border border-neutral-700 text-xs">{item.name}</span>
                        </span>
                        <div className="flex justify-start mt-4 gap-10">
                            <div><span className="text-neutral-400">INTENTION: </span>{item.intention}</div>
                            <div><span className="text-neutral-400">CATEGORY: </span>{item.category}</div>
                        </div>
                        <p className=" tracking-normal text-neutral-300 my-2">{item.description}</p>
                        <p className=" text-neutral-400 my-2">REFERENCES</p>
                        <span className="my-2 border-solid border-b-[.1px] border-orange-400"><a href="#">{item.references}</a></span>
                    </div>
                )
            })}
        </div>
    )
}

export default Tags