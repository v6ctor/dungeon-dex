export default function CardCarousel({set_name, logo}) {
  return (
    <div>
        <div className="flex flex-row items-center p-2 gap-4">
            <img src={logo} alt="Card image" className="h-20 max-w-50 justify-center items-center"/>
            <h1 className="font-bold text-3xl">{set_name}</h1>
        </div>
        <div className="carousel rounded-box gap-2 w-full">
            {[
                "https://www.pokebeach.com/news/2025/06/172-Genesect-ex-Black-Bolt.jpg",
                "https://www.pokebeach.com/news/2025/06/135-Dwebble-Black-Bolt.jpg",
                "https://www.pokebeach.com/news/2025/06/174-Zekrom-ex-Black-Bolt.jpg",
                "https://www.pokebeach.com/news/2025/06/174-Reshiram-ex-White-Flare.jpg",
                "https://www.pokebeach.com/news/2025/05/Victini-BWR-Promo.png",
                "https://www.pokebeach.com/news/2025/06/97-Victini-Black-Bolt.jpg",
                "https://www.pokebeach.com/news/2025/06/99-Darmanitan-Black-Bolt.jpg",
            ].map((url, index) => (
                <div
                key={index}
                className="carousel-item h-60 rounded-xl overflow-hidden flex flex-col gap-1"
                >
                    <img src={url} alt="Card image" className="h-full w-auto rounded-xl" />
                    <div className="stat-desc text-green-400">↗︎ 200 (22%)</div>
                </div>
            ))}
        </div>
    </div>
    
  );
}
