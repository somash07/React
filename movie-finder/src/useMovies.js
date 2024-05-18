import {useState,useEffect} from 'react'

const KEY='374ea490'
export function useMovies(query, callBack){
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        callBack?.()
        const controller =new AbortController()//native browser api for data fetching clean up.
        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal: controller.signal}
            );
            if (!res.ok) throw new Error("something went worng..");
            const data = await res.json();
            // console.log(data);
            if (data.Response === "False") throw new Error("movie not found");
            setMovies(data.Search);
            setError('')
          } catch (err) {
            //its not a error so 
            if(err.name!=='AbortError'){
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
        if (!query.length) {
          setMovies([]);
          setError("");
          return;
        }
    
        fetchMovies();
    
    
        return(()=>{
          return controller.abort()
        })
      }, [query]);

      return {movies, isLoading, error}
}