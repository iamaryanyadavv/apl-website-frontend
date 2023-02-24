import { Link } from "@nextui-org/react";
import React from "react";
import "./seasons.css";

function Seasons() {
    return(
        <div>
            Seasons
            <Link href="/seasons/apl5">
            APL 5
            </Link>
            <Link href="/seasons/apl6">
            APL 6
            </Link>
        </div>
    )
}

export default Seasons;