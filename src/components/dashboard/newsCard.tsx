interface NewsCardProps {
  image: string;
  alt: string;
  title: string;
  snippet_text: string;
  source_url: string;
}

export default function NewsCard({ image, alt, title, snippet_text, source_url }: NewsCardProps) {
    return (
        <div className="card bg-base-100 w-full h-80 shadow-sm">
            <figure>
                <img
                src={image}
                alt={alt}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{snippet_text}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}