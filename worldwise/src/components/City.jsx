import { Link, useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../context/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const {cities}=useCities()

  const {id}= useParams()

  const [searchParams,setSearchParams]=useSearchParams();
  const lat= searchParams.get('lat')
  const lng= searchParams.get('lng')
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

  return <>
  <h3>City {id}</h3>
  <p>position: {lat},{lng}</p>
  <Link to="/app/cities">back</Link>
  </>

}

export default City;
