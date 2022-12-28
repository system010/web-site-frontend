import React from "react";

function Fifaitem({ image, name, price }) {
    return (
        <div className="fifaitem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ج{price} </p>
            <button className="button" > buy </button>
        </div>
    );
}

export default Fifaitem;
