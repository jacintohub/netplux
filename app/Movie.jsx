import Link from "next/link"

export default function Movie({title, id, poster_path, release_date}) {
    const imagePath = "https://image.tmdb.org/t/p/original"

    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <img src={imagePath + poster_path} alt="" className="imagem"/>
            </Link>
        </div>
    )
};
