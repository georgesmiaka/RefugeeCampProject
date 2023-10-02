import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Document() {

    useEffect(() => {
        console.log("Hello Document")
    }, []);

    return (
        <div className="Body">
            <h1>Socio-economic indicators</h1>
            <h4>Some socio-economic indicators used to measure social and economic development in the Chad report</h4>
            <p><b>- Poverty rate:</b> The ratio of the number of people in a given group whose income falls bellow the poverty line.</p>
            <p><b>- Household income:</b> The measurement of the total amount of capital earned by every member of a single Household.</p>
            <p><b>- Asset ownership:</b> The ratio of the number of asset owned (Radio, Motrocycle, Bicycle, Mobile)</p>
            <p><b>- Access to School:</b> School enrollment rate</p>
            <p><b>- Access to Health Care Services:</b> Percent of households that are access to healtcare services.</p>
            <p><b>- Water index</b>: The ratio of the number of households that have access to clean water.</p>
        </div>
    );
}

export default Document;