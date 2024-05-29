import styles from "./CountryItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CountryItem({ city }) {
  const {country, emoji, date } = city;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <h3>{country}</h3>
      <time>{formatDate(date)}</time>
      <button>x</button>
    </li>
  );
}
export default CountryItem;
