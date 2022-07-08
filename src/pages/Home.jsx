import React from "react";
import { useEffect, useState } from "react";
import { CoffeeCard, CoffeeModal } from "../components";

import SearchIcon from "../images/search.svg";

const API_URL = "https://api.sampleapis.com/coffee/hot";

const Home = () => {
  const [coffeeList, setCoffeeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCoffeeModal, setOpenCoffeeModal] = useState(false);
  const [coffeeModalData, setCoffeeModalData] = useState();

  const showCoffeeModal = (data) => {
    setOpenCoffeeModal(true);
    setCoffeeModalData(data);
  };

  const searchCoffee = async (title) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const newArray = data.filter(function (el) {
      return el.title.toLowerCase().includes(title.toLowerCase());
    });

    setCoffeeList(title ? newArray : data);
  };

  useEffect(() => {
    searchCoffee("");
  }, []);

  return (
    <div className="main">
      <h1>CoffeeLand</h1>
      <div className="search">
        <input
          placeholder="Search for your favourite coffee"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchCoffee(searchTerm)}
        />
      </div>

      {coffeeList?.length > 0 ? (
        <div className="container">
          {coffeeList.map((coffee, index) => (
            <button key={index} onClick={() => showCoffeeModal(coffee)}>
              <CoffeeCard coffee={coffee} />
            </button>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> NO coffee found </h2>
        </div>
      )}

      {openCoffeeModal && coffeeModalData && (
        <CoffeeModal
          setOpenModal={setOpenCoffeeModal}
          coffee={coffeeModalData}
        />
      )}
    </div>
  );
};

export default Home;
