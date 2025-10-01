import {IMovieModel} from "@/Models/IMovieModel";
import MovieListCard from "@/Components/MovieListCard/MovieListCard";
import './MovieListCards.css';

type IProps={
    movies:IMovieModel[];
}

export default function MovieListCards  ({movies}:IProps) {
    return (

            <section className="carousel-container">
                <div className="carousel">
                    {movies.map((movie) => (
                        <MovieListCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
    );
};
