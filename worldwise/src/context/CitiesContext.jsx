import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case "cities/deleted":
      return{
        ...state,
        isLoading: false,
        cities: state.cities.filter((city)=> city.id!==action.payload),
      }

    default:
      throw new Error("Unknown action type");
  }
};

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity ,error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function cityNameFetch() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("http://localhost:3000/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({ type: "rejected", payload: "err in data fetch" });
      }
    }
    cityNameFetch();
  }, []);

  async function getCity(id) {
    if(Number(id)===currentCity.id) return 
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:3000/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (e) {
      dispatch({ type: "rejected", payload: "err in data fetch" });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:3000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
      // console.log(data)
    } catch (e) {
      dispatch({ type: "rejected", payload: "err in creating a city" });
    }
  }

  async function deleteCity(id) {
    // setCities((cities)=> cities.filter((city)=> city.id!==id))
    dispatch({type: "loading"})
    try {
      await fetch(`http://localhost:3000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({type: "cities/deleted",payload : id})
    } catch (e) {
      dispatch({ type: "rejected", payload: "err in deleting" });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
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
