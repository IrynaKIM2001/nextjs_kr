import {getMoviesByGenre, getMoviesWithGenres, searchMovies} from "@/Services/services.api";
import PaginationComponent from "@/Components/PaginationComponent/PaginationComponent";
import MovieListCards from "@/Components/MovieListCards/MovieListCards";

type HomePageProps = {
    searchParams?: {
        page?: string;
        q?: string;
        genre?: string;
        name?: string;
    }
};

export default async function HomePage({searchParams}: HomePageProps) {

    const currentPage = parseInt(searchParams?.page || '1', 10);
    const searchQuery = searchParams?.q;
    const genreId = searchParams?.genre ? parseInt(searchParams.genre, 10) : null;

    let moviesData;
    let pageTitle;

    if (searchQuery) {
        moviesData = await searchMovies(searchQuery, currentPage);
        pageTitle = `Результати пошуку: "${searchQuery}"`;
    } else if (genreId) {
        moviesData = await getMoviesByGenre(genreId, currentPage);
        pageTitle = `Жанр: ${searchParams?.name || 'Обраний'}`;
    } else {
        moviesData = await getMoviesWithGenres(currentPage);
        pageTitle = "Популярні фільми";
    }

    return (
        <div>
            <h1>{pageTitle}</h1>
            {moviesData.results.length>0?(
                <MovieListCards movies={moviesData.results} />
            ):(
                <div style={{ textAlign: 'center', marginTop: '50px', color: '#ccc' }}>
                <h2>На жаль, за вашим запитом нічого не знайдено.</h2>
                </div>
            )}
            {moviesData.results.length > 0 && (
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={moviesData.total_pages}
                    searchParams={searchParams}
                />
            )}
        </div>
    );
}