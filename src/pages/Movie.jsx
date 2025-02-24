import { Card } from "../components/UI/Card";
import { useState, useEffect } from "react";
import { GetMoviesData } from "../Api/GetMoviesData";
import { Loading } from "../components/layout/Loading"; // Import Loading Component

export const Movie = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Input starts empty
    const [query, setQuery] = useState("titanic"); // Default API query
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch movies when query or page changes
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const movieData = await GetMoviesData(query, page);
                if (movieData && movieData.Search) {
                    setMovies(movieData);
                } else {
                    setMovies(null);
                    setError("No movies found. Try another search.");
                }
            } catch (err) {
                setError("Failed to fetch movies. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [query, page]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            setQuery(searchTerm); // Only update query when Enter is pressed
            setPage(1); // Reset to first page when searching
            setSearchTerm("");
        }
    };

    return (
        <>
            <div className="input-field">
                <input 
                    type="text" 
                    placeholder="Search Movie..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown} // Trigger search on Enter
                />
            </div>

            {/*Show Loading Component when fetching data */}
            {loading ? (<Loading />):(
                <>
                    {error && <p>{error}</p>}
                    <ul className="container grid grid-four--cols">
                        {movies?.Search?.length > 0 ? (
                            movies.Search.map((currMovie) => (
                                <Card key={currMovie.imdbID} currMovie={currMovie} />
                            ))
                        ) : (
                            !loading && <p>No movies found.</p>
                        )}
                    </ul>

                    <div className="page-btn">
                        <button 
                            className="btn" 
                            onClick={() => setPage(page - 1)} 
                            disabled={page === 1}
                        >
                            Prev Page
                        </button>
                        <button className="btn" onClick={() => setPage(page + 1)}>Next Page</button>
                    </div>
                    <p>Page: {page}</p>
                </>
            )}
        </>
    );
};
