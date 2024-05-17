import { useEffect, useState, useRef } from "react";
import StarRating from "./StarRating";
import { KEY } from "./App";
import { Loader } from "./Loader";

export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) {
      countRef.current = countRef.current + 1;
      console.log(countRef);
    }
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbId === selectedId
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runTime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newWatchedMovie = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runTime.split(" ").at(0)),
      userRating,
      countRatingDecision: countRef.current
    };
    // console.log(newWatchedMovie)
    onAddWatched(newWatchedMovie);
    // onCloseMovie();
    setAvgRating((Number(imdbRating) + userRating) / 2);
  }
  useEffect(() => {
    const controller = new AbortController(); //native browser api for data fetching clean up.
    try {
      async function getMovieData() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        // console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieData();
    } catch (err) {
      throw new Error(err);
    }
  }, [selectedId]);

  useEffect(() => {
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "MovieManiac";
      // console.log(`clean up effect for movie ${title}`)
      // this will remember the title even after the unmount because of a closure that states a funx will remember all the variable that were present at the time of fnx creation.
    };
  }, [title]);

  useEffect(() => {
    //oneach mount a event listener is added to the document.
    const callBack = (e) => {
      if (e.code === "Escape") {
        onCloseMovie();
        // console.log('closing with escape key')
      }
    };
    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [onCloseMovie]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <header>
            <button className="btn btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{runTime}</p>
              <p>{released}</p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} ImdbRating
              </p>
            </div>
          </header>
          <p className="rating">The average rating is: {avgRating}</p>
          <section>
            {!isWatched ? (
              <div className="rating">
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <button className="btn-add" onClick={handleAdd}>
                    Add to list
                  </button>
                )}
              </div>
            ) : (
              <p className="rating">
                Already in your watch list and rated with {watchedUserRating}
              </p>
            )}
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>DirectedBy: {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
