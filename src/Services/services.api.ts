import { IMoviesArrayModel } from "@/Models/IMoviesArrayModel";
import { IGenreModel } from "@/Models/IGenreModel";
import { IMovieModel } from "@/Models/IMovieModel";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_TMDB_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_BASE_TMDB_KEY;

const MoviesWithGenres = async (moviesPromise: Promise<IMoviesArrayModel>): Promise<IMoviesArrayModel> => {
    const [moviesResponse, genres] = await Promise.all([
        moviesPromise,
        getGenres()
    ]);
    const moviesWithFullGenres = moviesResponse.results.map(movie => {
        const movieGenres = movie.genre_ids.map(genreId => {
            return genres.find(g => g.id === genreId) || null;
        }).filter((genre): genre is IGenreModel => genre !== null);
        return { ...movie, genres: movieGenres };
    });

    return { ...moviesResponse, results: moviesWithFullGenres };
};
export const getGenres = async (): Promise<IGenreModel[]> => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=uk-UA`, {
        cache: 'force-cache'
    });
    const data = await res.json();
    return data.genres;
};

export const getMoviesWithGenres = async (page: number = 1): Promise<IMoviesArrayModel> => {
    const moviesPromise = fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=uk-UA&page=${page}`, {
        next: { revalidate: 3600 }
    }).then(res => res.json());

    return MoviesWithGenres(moviesPromise);
};

export const getMovieById = async (id: string): Promise<IMovieModel> => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=uk-UA`, {
        next: { revalidate: 86400 }
    });
    return res.json();
};

export const getMoviesByGenre = async (genreId: number, page: number = 1): Promise<IMoviesArrayModel> => {
    const moviesPromise = fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=uk-UA&with_genres=${genreId}&page=${page}`, {
        next: { revalidate: 3600 }
    }).then(res => res.json());

    return MoviesWithGenres(moviesPromise);
};

export const searchMovies = async (query: string, page: number = 1): Promise<IMoviesArrayModel> => {
    const moviesPromise = fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}&page=${page}`, {
        cache: 'no-store'
    }).then(res => res.json());

    return MoviesWithGenres(moviesPromise);
};