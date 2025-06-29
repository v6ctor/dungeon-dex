import { Metadata } from "next";
import { auth } from "@/auth";
import SignIn from "@/components/SignIn/SignIn";
import SideMenu from "@/components/dashboard/sideMenu";
import CardCarousel from "@/components/dashboard/cardCarousel";
import ChangelogCard from "@/components/dashboard/changeLog";
import NewsCard from "@/components/dashboard/newsCard";
import news from "../../public/newsDummyData";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();

  const logos = [
    {
      "set_name": "Scarlet & Violet 151",
      "source_url": "https://tcg.pokemon.com/assets/img/sv-expansions/151/logo/en-us/logo.png",
    },
    {
      "set_name": "Scarlet & Violet Prismatic Evolutions",
      "source_url": "https://primary.jwwb.nl/public/h/t/i/temp-zjpebgcobmaxydcmrfwb/image-high-h7a1tw.png",
    },
    {
      "set_name": "Scarlet & Violet Paldean Fates",
      "source_url": "https://tcg.pokemon.com/assets/img/sv-expansions/paldean-fates/logo/en-us/sv04pt5-logo.png",
    }
  ]

  if (!session) {
    return (
      <SignIn/>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <main className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] pt-4">
        <SideMenu />
        <section className="flex flex-col md:flex-row flex-1 gap-6 p-4">
          <div className="flex flex-col gap-4 md:w-[800px] w-full">
            {
              logos.map((item, index) => (
                <CardCarousel 
                  key={index}
                  set_name={item.set_name}
                  logo={item.source_url}
                  />
              ))
            }
          </div>

          <div className="flex flex-col flex-1 md:pl-10 w-full max-w-xl pr-5">
            <h1 className="text-3xl font-bold pb-4">
              What's new! <span className="font-light">Changelog v0.0.1</span>
            </h1>

            <ChangelogCard />

            <section className="pt-6 space-y-4">
              <h2 className="text-3xl font-bold">
                Pokémon TCG News
              </h2>
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  image={item.image}
                  alt={item.image_alt}
                  title={item.title}
                  snippet_text={item.snippet_text}
                  source_url={item.source_url}
                />
              ))}
            </section>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
