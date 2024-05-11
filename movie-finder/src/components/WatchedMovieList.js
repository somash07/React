import { WatchedMovie } from "./WatchedMovie";

export function WatchedMovieList({ watched, onDeleteWatchedMovie }) {
  // presentational
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbId}
          onDeleteWatchedMovie={onDeleteWatchedMovie} />
      ))}
    </ul>
  );
}
