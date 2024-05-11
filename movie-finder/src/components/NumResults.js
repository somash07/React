export function NumResults({ movies }) {
  //presentational
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
