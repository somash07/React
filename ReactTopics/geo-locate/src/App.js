import { useState } from "react";
// console.log(navigator.geolocation.getCurrentPosition)


function useGeolocation(){
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  function getPosition() {
    if (!navigator.geolocation) {
      return setError("your browser does not support geolocation");
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return {isLoading,position,error,getPosition}
}


export default function App() {
  const [count, setCount] = useState(0);
  const {isLoading,position: {lat,lng},error,getPosition}=useGeolocation()

  function handleClick(){
    setCount((count)=>count+1)
    getPosition()
  }
  return (
    <div>
      <button onClick={handleClick}>Get my position</button>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!error && !isLoading && lat && lng && (
        <p>
          your GPS position:{" "}
          <a href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
            {lat},{lng}
          </a>
        </p>
      )}
      <p>you requested position {count} times</p>
    </div>
  );
}
