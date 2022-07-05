import React from "react";

const CoffeeCard = ({ coffee }) => {
    return (
        <div className="coffee">
            <div>
                <p>{coffee.id}</p>
            </div>
            <div>
                <img src={coffee.image} alt={coffee.title}/>
            </div>
            <div>
                <h3>{coffee.title}</h3>
                <span>{coffee.ingredients.join(', ')} </span>
            </div>
        </div>
    )
}

export default CoffeeCard;