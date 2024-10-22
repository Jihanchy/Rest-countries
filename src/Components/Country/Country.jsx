import { useState } from 'react';
import './country.css'

const Country = ({country,handleMarkAsVisited}) => {
    const {name,flags,population,region,cca3}  = country
    const [visited,setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
        console.log(visited)
    }
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h4>Name:{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Region : {region}</p>
            <p>Code:{cca3}</p>
            <button onClick={()=>handleMarkAsVisited(country)}>Mark as visited</button>
            <button style={{backgroundColor: visited? 'green': 'purple'}} onClick={handleVisited}>{visited?'Visited':'Ongoing'}</button>
        {visited ? 'I have visit this place': 'i want to visit'}
        </div>
    );
};

export default Country;





