import React from "react";
import { Ligue1list } from "./Ligue1list";
import Ligue1item from "./Ligue1item";
import "./Ligue1.css";

function Ligue1() {
    return (
        <div className="ligue1">
            <h1 className="ligue1title">الدوري الفرنسى</h1>
            <div className="ligue1list">
                {Ligue1list.map((ligue1item, key) => {
                    return (
                        <Ligue1item
                            key={key}
                            image={ligue1item.image}
                            name={ligue1item.name}
                            price={ligue1item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Ligue1;
