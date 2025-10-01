
import Link from "next/link";
import Image from "next/image";
import {IMovieModel} from "@/Models/IMovieModel";
import './MovieListCard.css';

type MovieListCardProps = {
    movie: IMovieModel
}

export default function MovieListCard ({movie}: MovieListCardProps) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <article className="movie-item">
            <Link href={`/movie/${movie.id}`}>
                <div className="image-container">
                    <Image
                        src={imageUrl}
                        alt={movie.title}
                        width={500}
                        height={750}
                    />
                    <div className="movie-info">
                        <h3 className='article-h3'>{movie.title}</h3>
                        <hr/>
                        <p>{movie.overview.slice(0, 100)}... </p>
                        {movie.genres && (
                            <p>Жанри: {movie.genres.map(g => g.name).join(', ')}</p>
                        )}
                    </div>
                </div>
            </Link>
        </article>
);
};