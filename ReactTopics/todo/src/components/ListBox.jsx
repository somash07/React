import { useEffect, useState } from "react";
import Loader from "./Loader";

function ListBox({ movieList, handleSelectedMovie, selectedMovieId , onAddtoWishlist}) {
  return (
    <ul className=" grid grid-cols-3 gap-6 m-5">
      {!movieList && <h1>please search </h1>}
      {movieList?.map((movie) => (
        <li
          className="flex flex-col items-center gap-5 bg-white rounded-md shadow-md p-6 h-[600px]"
          key={movie.imdbID}
        >
          {movie.imdbID === selectedMovieId ? (
            <MovieCard
              handleSelectedMovie={handleSelectedMovie}
              selectedMovieId={selectedMovieId}
              onAddtoWishlist={onAddtoWishlist}
            />
          ) : (
            <div className="flex flex-col justify-evenly gap-5">
              <img src={movie.Poster} alt="" />
              <h3>{movie.Title}</h3>
              <button
                className="bg-black text-white p-5 h-6 w-full rounded-lg flex items-center justify-center hover:bg-slate-600"
                onClick={() => handleSelectedMovie(movie.imdbID)}
              >
                View
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function MovieCard({ handleSelectedMovie, selectedMovieId ,onAddtoWishlist}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    Title: title,
    Poster: poster,
    Year: year,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    imdbRating,
  } = movieDetails;

  const handleAdd=()=>{
   const newWishlistItem= {
    title,
    poster,
    selectedMovieId,
    genre
   }
   onAddtoWishlist(newWishlistItem)
  }

  useEffect(() => {
    async function getMoviesViaId() {
      try {
        setIsLoading(true);
        if (!selectedMovieId) return;
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=374ea490&i=${selectedMovieId}`
        );
        if (!res.ok) throw new Error("cant load data");
        const data = await res.json();
        console.log(data);
        setMovieDetails(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    getMoviesViaId();
  }, [selectedMovieId]);

  useEffect(()=>{
    if(!title) return 
    document.title = `Movie | ${title}`

    return function (){
        document.title ="usepopcorn"
        console.log("this is cleanup for ", {title})
    }
  },[title])

  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      if(e.code=== "Escape"){
        handleSelectedMovie(null)
      }
    })

    return function(){
        document.removeEventListener('keydown', (e)=>{
            if(e.code === "Escape")
                handleSelectedMovie(null)
        })
    }
  },[handleSelectedMovie])


  return (
    <div className="h-full w-full flex flex-col gap-3">
      <button
        onClick={() => handleSelectedMovie(null)}
        className="h-10 w-10 rounded-full bg-black text-white hover:bg-slate-300 self-end"
      >{`<-`}</button>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex gap-5 bg-black p-5 text-white rounded-md shadow-md">
          <img src={poster} alt="movie.Title" className="h-40" />
          <div>
            <h1>
              {title}-{runtime}
            </h1>
            <h1>Released on: {year}</h1>
            <h1>genre: {genre}</h1>
            <h1>imbd: {imdbRating}</h1>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <p>{plot}</p>
        <button className="h-10 rounded-lg w-full bg-black text-white hover:bg-slate-300" onClick={handleAdd}>
          Add to watch List
        </button>
      </div>
    </div>
  );
}

export default ListBox;
