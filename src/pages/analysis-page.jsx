const Analysis = () => {
    return (
        <div className="h-auto">
            <div className="m-auto w-[50%] mt-[50px] mb-[150px]">
                <h1 className="text-3xl tracking-normal">Analysis</h1>
                <p className="text-sm tracking-wide my-2">Enrich and analyze IPs in bulk. Paste text containing IPs or upload a file of structured IP data to get started.</p>
                <input type="text" className="w-full h-[150px] bg-neutral-900 mt-10 p-4 border-dashed border-0 border-b-[.1px] border-zinc-600" placeholder="Paste logs or other text containing IPs.." />
                <button className="w-full h-14 text-zinc-300 bg-neutral-900 border-none hover:border border-neutral-700">CLICK OR DRAG AND DROP TO UPLOAD FILES</button>
            </div>
        </div>
    )
}

export default Analysis