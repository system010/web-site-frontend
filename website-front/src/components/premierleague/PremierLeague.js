import React from "react";
import { PremierLeaguelist } from "./PremierLeaguelist";
import PremierLeagueitem from "./PremierLeagueitem";
import "./PremierLeague.css";
import Header from "../header/Header";
import { Picture } from "../picture/Picture";
import { Footer } from "../footer/Footer";

function PremierLeague() {
    return (
        <div>
            <Header />
            <Picture />
            <div className="pl">
                <h1 className="pltitle">الدوري الانجليزي</h1>
                <div className="pllist">
                    {PremierLeaguelist.map((premierleagueitem, key) => {
                        return (
                            <PremierLeagueitem
                                key={key}
                                image={premierleagueitem.image}
                                name={premierleagueitem.name}
                                price={premierleagueitem.price}
                            />
                        );
                    })}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PremierLeague;
