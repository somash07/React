import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function cityNameFetch() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("err in data fetch");
      } finally {
        setIsLoading(false);
      }
    }
    cityNameFetch();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:3000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (e) {
      alert("error in fetch");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}


function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citiesContext was used outside the cities provider");
  return context;
}

export { CitiesProvider, useCities };
