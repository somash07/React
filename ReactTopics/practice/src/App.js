import { useState } from "react"

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  }
]

const listStyle={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  width: '300px',
  border: '1px solid red'
}

const listStyleOpen={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  width: '300px',
  border: '1px solid red',
  backgroundColor: 'black',
  color: 'white'
}

const containerStyle={
  display: 'flex',
  justifyContent: 'space-between',
}
export default function App(){
  const [open,setOpen]=useState('')

  function handleClick(movie){
    setOpen(movie.imdbID)
  }
  return <ul style={containerStyle}>
    {tempMovieData.map((val)=><CompPiece key= {val.imdbID}movie={val} onClick={handleClick} open={open}/>)}
    {/* <h3>{val.Title}</h3> */}
  </ul>
}

// function CompPiece({children}){
//   return <li>{children}</li>
// }

function CompPiece({movie,onClick,open}){
  return (<li style={listStyle} onClick={()=>onClick(movie)}>{open===movie.imdbID? <img src={movie.Poster}/>: movie.Title}</li>)
}