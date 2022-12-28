import React from "react";

function PremierLeagueitem({ image, name, price }) {
    return (
        <div className="plitem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ج{price} </p>
            <button className="button" > buy </button>
        </div>
    );
}

export default PremierLeagueitem;
