import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SearchHotels() {

    const today = new Date().toLocaleDateString().split(".");
    const day = Number(today[0]);
    const month = Number(today[1]);
    const year = today[2];
    

    const [destination, setDestination] = useState("");
    const [people, setPeople] = useState("");
    const [startData, setStartData] = useState(new Date().toLocaleDateString());
    const [endData, setEndData] = useState(`${day + 5}.${month}.${year}`);

    const handleSetPeopleCount = (e) => {
        setPeople(e.target.value);
    }

    const sprawdz = () => {
        console.log(destination, people, startData, endData);
    }

    return (
        <section className="searchHotels">
            <input type="text" name="" id="" onChange={(e) => setDestination(e.target.value)} value={destination} placeholder="Destination"/>
            <input type="number" name="" id="" value={people} onChange={handleSetPeopleCount}  placeholder="No of people"/>
            <input type="date" name="" id="" placeholder="Checkin date" onChange={e => setStartData(e.target.value)}/>
            <input type="date" name="" id="" placeholder="Checkout date" onChange={e => setEndData(e.target.value)}/>
            <Link to="/hotels"><div className="searchIcon"><FaSearch onClick={sprawdz}/></div></Link>
        </section>
    )
}
