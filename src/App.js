import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'https://api.sampleapis.com/coffee/hot'

const App = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    
    const searchCoffee = async (title) => {
        const response = await fetch(API_URL)
        const data = await response.json();
        const newArray = data.filter(function (el) {
            return el.title.toLowerCase().includes(title.toLowerCase())
        });

        setCoffeeList(title ? newArray : data)
    }

    useEffect(() => {
        searchCoffee('');
    }, [])

    return(
        <div className="app">
            <h1>CoffeeLand</h1>
            <div className="search">
                <input 
                placeholder="Search for your favourite coffee"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt='search'
                onClick={() => searchCoffee(searchTerm)}
                />
            </div>

            {coffeeList?.length > 0 ? (
                <div className="container">
                    {coffeeList.map((coffee) => (
                            <CoffeeCard coffee={coffee}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2> NO coffee found </h2>
                </div>
            )}
            
        </div>
    );
}

export default App;