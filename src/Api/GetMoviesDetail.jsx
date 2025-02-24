export const getMovieDetails = async ({ params }) => {
    const id = params.MoviesID;
    console.log(id);
    const API = `http://www.omdbapi.com/?i=${id}&apikey=477f9334`;
    try {
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};