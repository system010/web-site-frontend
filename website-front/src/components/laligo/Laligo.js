import React from "react";
import { Laligolist } from "./Laligolist";
import Laligoitem from "./Laligoitem";
import "./Laligo.css";
import Header from "../header/Header";
import { Picture } from "../picture/Picture";
import { Footer } from "../footer/Footer";

function Laligo() {
    return (
        <div>
            <Header />
            <Picture />

            <div className="laligo">
                <h1 className="laligotitle">الدوري الاسباني</h1>
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
                <Footer />
            </div>
        </div>
    );
}

export default Laligo;
