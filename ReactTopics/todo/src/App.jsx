import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import ListBox from "./components/ListBox";
import Loader from "./components/Loader";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError]= useState('')
  const [selectedMovieId, setSelectedMovieId]= useState(null)
  const [wishlist,setWishList]= useState([])

  const numResults = movieList?.length;

  const handleSelectedMovie=(movieId)=>{
    console.log(movieId)
    setSelectedMovieId(movieId)
  }

  const handleWishList=(movie)=>{
    setWishList((wishlist)=>[...wishlist,movie])
  }
  useEffect(() => {
    async function searchQuery() {
      try{
        setSelectedMovieId(null)
        setIsLoading(true);
        setError('')
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=374ea490&s=${query}`
        );

        if(!res.ok) throw new Error('cant fetch data of somash')

        const data = await res.json();

        if(data.Response==="False") 
          throw new Error('no movies found')
    
        setMovieList(data.Search);
        console.log(data.Search);
        setIsLoading(false);
      }catch(err){
        console.log(err.message)
        setError(err.message)
      }finally{
        setIsLoading(false)
      }
    }

    if(!query.length ){
      setMovieList([])
      setError("search for smth")
      return
    }
    searchQuery();
  }, [query]);
  return (
    <div>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults numResults={numResults} />
      </NavBar>
      <main className="text-center">
        {isLoading && <Loader/>}
        {error && <ErrorMessage message={error}/>}
        {!isLoading && !error && <ListBox movieList={movieList} handleSelectedMovie={handleSelectedMovie} onAddtoWishlist={handleWishList} selectedMovieId={selectedMovieId}/>}
      </main>
      {wishlist?.map((item)=>item.title)}
    </div>
  );
}


function ErrorMessage({message}){
  return(
    <p className="text-red-700">{message}</p>
  )
}

export default App;

