function Search({query,setQuery}) {

    
  return (
    <div>
      <input
        placeholder="search movies...." 
        className="w-[700px] rounded-md text-black shadow-md px-5 h-10" value={query} onChange={(e)=>setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
 