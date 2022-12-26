import React from "react";
import { Fifalist } from "./Fifalist";
import Fifaitem from "./Fifaitem";
import "./Fifa.css";

function Fifa() {
    return (
        <div className="fifa">
            <h1 className="fifatitle">المنتخبات</h1>
            <div className="fifalist">
                {Fifalist.map((fifaitem, key) => {
                    return (
                        <Fifaitem
                            key={key}
                            image={fifaitem.image}
                            name={fifaitem.name}
                            price={fifaitem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Fifa;
