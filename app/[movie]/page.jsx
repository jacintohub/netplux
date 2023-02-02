
export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetail({ params }) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <div>
            <div>
                <h2 className="font-bold mb-3">{res.title}</h2>
                <h2 className="text-base">{res.release_date}</h2>
                <h2 className="text-green-600">Runtime: {res.runtime} minutes</h2>
                <h2 className="bg-green-600 inline-block my-6 py-2 px-4 rounded-md">{res.status}</h2>
                <img className="rounded-3xl w-full mb-8" src={imagePath + res.backdrop_path} alt="" width={600} height={600} priority />
                <p className="text-center">{res.overview}</p>
            </div>
        </div>
    )
}