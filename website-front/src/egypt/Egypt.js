import React from "react";
import { Egyptlist } from "./Egyptlist";
import Egyptitem from "./Egyptitem";
import "./Egypt.css";

function Egypt() {
    return (
        <div className="egypt">
            <h1 className="egypttitle">الدوري المصري</h1>
            <div className="egyptlist">
                {Egyptlist.map((egyptitem, key) => {
                    return (
                        <Egyptitem
                            key={key}
                            image={egyptitem.image}
                            name={egyptitem.name}
                            price={egyptitem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Egypt;
