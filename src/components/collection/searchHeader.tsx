export default function SearchHeader() {
    return (
        <div>
            <div className="mb-6">
                <label className="input rounded-lg">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <h1 className="font-bold text-4xl">Charizard Ex</h1>
            <div className="flex flex-row justify-between items-center pt-5 pb-5">
                <h3 className="text-sm pb-5">33 results found for "Charizard Ex"</h3>
                <div className="join gap-1">
                    <button className="join-item btn btn-sm">«</button>
                    <input
                        className="join-item btn btn-square btn-sm rounded-lg" 
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    <input className="join-item btn btn-square btn-sm rounded-lg" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square btn-sm rounded-lg" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square btn-sm rounded-lg" type="radio" name="options" aria-label="4" />
                    <button className="join-item btn btn-sm">»</button>
                </div>
            </div>
        </div>
    )
}