import React from "react";

function Ligue1item({ image, name, price }) {
    return (
        <div className="ligue1item">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ج{price} </p>
            <button className="button" > buy </button>
        </div>
    );
}

export default Ligue1item;
