import React from "react";

function Egyptitem({ image, name, price }) {
    return (
        <div className="egyptitem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ج{price} </p>
        </div>
    );
}

export default Egyptitem;
