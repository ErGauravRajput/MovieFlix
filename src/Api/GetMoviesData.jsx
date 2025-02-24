export const GetMoviesData= async (query,page)=>{
  const API=`https://www.omdbapi.com/?i=tt3896198&apikey=477f9334&s=${query.trim()}&page=${page}`;
    try {
        const response=await fetch(API);
        const data=await response.json();
        console.log(data);
        return data;
        
    } 
    catch (error) {
        console.log(error);
    }
}
