import React from "react";

function Serieaitem({ image, name, price }) {
    return (
        <div className="serieaitem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ج{price} </p>
        </div>
    );
}

export default Serieaitem;
