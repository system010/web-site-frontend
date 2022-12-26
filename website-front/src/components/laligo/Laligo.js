import React from "react";
import { Laligolist } from "./Laligolist";
import Laligoitem from "./Laligoitem";
import "./Laligo.css";

function Laligo() {
    return (
        <div className="laligo">
            <h1 className="laligotitle">الدوري الانجليزي</h1>
            <div className="laligolist">
                {Laligolist.map((laligoitem, key) => {
                    return (
                        <Laligoitem
                            key={key}
                            image={laligoitem.image}
                            name={laligoitem.name}
                            price={laligoitem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Laligo;
