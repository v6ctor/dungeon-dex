import collection from "./collection_data"
import Table from "@/components/collection/table";
import SearchHeader from "@/components/collection/searchHeader";
import SideMenu from "@/components/dashboard/sideMenu";
import Header from "@/components/Header/Header";
import { auth } from "@/auth";
import SignIn from "@/components/SignIn/SignIn";
import Footer from "@/components/Footer/Footer";

export default async function Collection() {
    const session = await auth();

    if (!session) {
        return <SignIn></SignIn>
    }
    return (
        <div>
            <Header />
            <main className="flex flex-row">
                <SideMenu />
                <div className="flex flex-col p-10 gap-5 w-full">
                    <h1 className="font-bold text-4xl">My Collection</h1>
                    <div className="tabs tabs-lift">
                        <input type="radio" name="cards-tabs" className="tab" aria-label="My Cards" defaultChecked/>
                        <div className="tab-content border-base-300 bg-base-100 p-10">
                            <SearchHeader></SearchHeader>
                            <Table collection={collection}/>
                        </div>
                        <input type="radio" name="cards-tabs" className="tab" aria-label="Sold" />
                        <div className="tab-content border-base-300 bg-base-100 p-10">
                            <SearchHeader></SearchHeader>
                        </div>
                        <input type="radio" name="cards-tabs" className="tab" aria-label="Wishlist" />
                        <div className="tab-content border-base-300 bg-base-100 p-10">
                            <SearchHeader></SearchHeader>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}