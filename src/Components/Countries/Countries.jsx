import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const [markAsVisited,setMarkAsVisited] = useState([])

    const handleMarkAsVisited = country => {
        const newArray = [...markAsVisited,country]
        setMarkAsVisited(newArray)
    }
   

    return (
        <div>
            <h4>Countries:{countries.length}</h4>
            <div>
                <h3>Country Num:{markAsVisited.length}</h3>
                <ul>
                    {
                        markAsVisited.map(country => <img src={country.flags.png}></img>)
                    }
                </ul>
            </div>
           <div className="countries">
           {
                countries.map(country => <Country
                    key={country.cca2}
                    handleMarkAsVisited={handleMarkAsVisited}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;