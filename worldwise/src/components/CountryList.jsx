import styles from './CountryList.module.css'
import CountryItem from './CountryItem'
import Spinner from './Spinner'
import Message from './Message'
function CountryList({cities,isLoading}) {
    if(isLoading) return <Spinner /> 

    if(!cities.length) return <Message message="no country travelled "/>
    return (
        <ul className={styles.countryList}>
            {cities.map(city => <CountryItem city={city} key={city.id}/>)}
        </ul>
    )
}

 
export default CountryList
