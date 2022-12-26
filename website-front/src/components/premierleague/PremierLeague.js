import React from "react";
import { PremierLeaguelist } from "./PremierLeaguelist";
import PremierLeagueitem from "./PremierLeagueitem";
import "./PremierLeague.css";

function PremierLeague() {
    return (
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
        </div>
    );
}

export default PremierLeague;
