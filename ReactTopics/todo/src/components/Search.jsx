import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inpel = useRef(null);

  useEffect(() => {
    function callBack(e) {
      if(document.activeElement===inpel.current) return 
      if (e.code === "Enter") {
        inpel.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callBack);
  }, [setQuery]);

  return (
    <div>
      <input
        ref={inpel}
        placeholder="search movies...."
        className="w-[700px] rounded-md text-black shadow-md px-5 h-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
