import { auth } from "@/auth";

export default async function ChangelogCard() {
    const session = await auth();
    return (
        <div className="hero items-start w-full">
            <div className="card bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <div className="flex flex-row">
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold">
                                June 23, 2025
                            </h1>
                        </div>
                    </div>
                    <p className="py-1 text-base text-gray-500">
                        We've made several improvements to improve reliability:
                    </p>
                    <ul className="list-disc list-inside text-left space-y-2 ml-4">
                        <li>Added API token support</li>
                        <li>New analytics dashboard</li>
                        <li>Improved Discord login security</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-xl">Got it!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}