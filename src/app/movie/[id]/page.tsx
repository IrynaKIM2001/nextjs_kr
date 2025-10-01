import {getMovieById} from "@/Services/services.api";
import StarRating from "@/Components/StarsRating/StarsRating";
import Image from 'next/image';
import  './MovieDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Metadata} from "next";

type MovieDetailPageProps = {
    params: { id: string };
};

export async function generateMetadata({ params }: MovieDetailPageProps): Promise<Metadata> {
    const movie = await getMovieById(params.id);
    return {
        title: `${movie.title} | MovieQueen`, // Наприклад: "Дюна | MovieQueen"
        description: movie.overview,
    };
}
export default async function MovieDetailPage({params}:MovieDetailPageProps) {
    const movie = await getMovieById(params.id);
    const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
    const genreNames = movie.genres?.map(genre => genre.name).join(", ") || "N/A";

    return(
            <div className="image-container-detailsPage">
                <Image
                    src={imageUrl}
                    alt={movie.title}
                    width={1280}
                    height={720}
                    priority={true}
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="movie-info-detailsPage">
                    <h3 className='article-h3-detailsPage'>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p>Оцінка глядачів: {movie.vote_average.toFixed(1)}</p>
                    <div>
                        <p>Ваша оцінка:</p>
                        <StarRating />
                    </div>
                    <span className="badge bg-info text-dark">Жанри: {genreNames}</span>
                </div>
            </div>
    );
}