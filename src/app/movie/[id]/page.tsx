import {getMovieById} from "@/Services/services.api";
import StarRating from "@/Components/StarsRating/StarsRating";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieDetail.module.css';

type MovieDetailPageProps = {
    params: { id: string };
};

export default async function MovieDetailPage({params}:MovieDetailPageProps) {
    const movie = await getMovieById(params.id);
    const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
    const genreNames = movie.genres?.map(genre => genre.name).join(", ") || "N/A";

    return(
        <div className={styles.imageContainerDetailsPage}>
            <Image
                src={imageUrl}
                alt={movie.title}
                width={1280}
                height={720}
                priority={true}
                className={styles.backgroundImage}
            />
            <div className={styles.movieInfoDetailsPage}>
                <h3 className={styles.articleH3DetailsPage}>{movie.title}</h3>
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