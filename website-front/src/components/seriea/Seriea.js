import React from "react";
import { Seriealist } from "./Seriealist";
import Serieaitem from "./Serieaitem";
import "./Seriea.css";
import Header from "../header/Header";
import { Picture } from "../picture/Picture";
import { Footer } from "../footer/Footer";

function Seriea() {
    return (
        <div>
            <Header />
            <Picture />
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
                <Footer />
            </div>
        </div>
    );
}

export default Seriea;
