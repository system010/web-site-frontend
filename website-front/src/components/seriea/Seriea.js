import React from "react";
import { Seriealist } from "./Seriealist";
import Serieaitem from "./Serieaitem";
import "./Seriea.css";

function Seriea() {
    return (
        <div className="seriea">
            <h1 className="serieatitle">الدوري الايطالي</h1>
            <div className="seriealist">
                {Seriealist.map((serieaitem, key) => {
                    return (
                        <Serieaitem
                            key={key}
                            image={serieaitem.image}
                            name={serieaitem.name}
                            price={serieaitem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Seriea;
