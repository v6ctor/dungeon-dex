"use client";

export default function Table({ collection }) {
    
    const add = () => {};
    const sell = () => {};
    const remove = () => {};

    return (
        <div className="overflow-x-auto">
            <table className="table border-separate [border-spacing:0_0.2rem]">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Daily Change</th>
                        <th>Monthly Change</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {collection.map((item, index) => (
                        <tr key={index} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>
                                <img src={item.image} className="h-10 rounded" alt={item.title} />
                            </td>
                            <td className="text-sm">{item.title}</td>
                            <td>1</td>
                            <td className="stat-desc text-green-400">↗︎ 120 (2%)</td>
                            <td className="stat-desc text-green-400">↗︎ 200 (22%)</td>
                            <td>
                                <div className="tooltip tooltip-top tooltip-warning p-2 hover:shadow-none focus:outline-none hover:bg-base-100 group" data-tip="Add 1 Quantity">
                                    <button 
                                        className="btn btn-square btn-sm bg-base-300 rounded-lg" 
                                        aria-label={`Add quantity ${item.title}`} 
                                        onClick={add}
                                    >+</button>
                                </div>
                                <div className="tooltip tooltip-top tooltip-warning p-2 hover:shadow-none focus:outline-none hover:bg-base-100 group" data-tip="Sell 1 Quantity">
                                    <button 
                                        className="btn btn-square btn-sm bg-base-300 rounded-lg" 
                                        aria-label={`Sell ${item.title}`} 
                                        onClick={sell}
                                    >-</button>
                                </div>
                                <div className="tooltip tooltip-top tooltip-warning p-2 hover:shadow-none focus:outline-none hover:bg-base-100 group" data-tip="Remove 1 Quantity">
                                    <button 
                                        className="btn btn-square btn-sm bg-base-300 rounded-lg" 
                                        aria-label={`Remove ${item.title}`} 
                                        onClick={remove}
                                    >×</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}