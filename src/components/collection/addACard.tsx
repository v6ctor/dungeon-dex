"use client";

export default function AddACard() {
    return (
        <div>
            <button className="btn btn-dash btn-secondary" onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>Add a Card</button>
                <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend className="fieldset-legend font-bold text-lg">Card Details</legend>
                        <label className="input input-ghost mb-5">
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
                            <input type="search" className="grow w-full" placeholder="Search..." />
                            <kbd className="kbd kbd-sm opacity-50">ctrl</kbd>
                            <kbd className="kbd kbd-sm opacity-50">K</kbd>
                        </label>
                        <label className="label">Quantity</label>
                        <input
                            type="number"
                            className="input validator"
                            required
                            placeholder="Type a number between 1 to 1000"
                            min="1"
                            max="1000"
                            title="Must be between be 1 to 1000"
                            />
                        <p className="validator-hint">Must be between be 1 to 1000</p>
                        <div className="flex justify-end items-center">
                            <button className="btn btn-success w-20 ">Add</button>
                        </div>
                    </fieldset>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}