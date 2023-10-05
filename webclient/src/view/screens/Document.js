import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Document() {

    useEffect(() => {
        console.log("Hello Document")
    }, []);

    return (
        <div className="Body">
            <h1>Multidimensional Poverty Index (MPI)</h1>
            <p><b>- 3 dimensions:</b> Health, Education and Standard of living.</p>
            <p><b>- 10 indicators:</b> (1) Nutrition; (2) Child Mortality; (3) Years of Schooling; (4) School Attendance; (5) Cooking Fuel; (6) Sanitation; (7) Drinking Water; (8) Electricity; (9) Flooring; and (10) Asset Ownership.</p>
            <p className="space"></p>
            <h4>Developing an Automatic System for monitoring Multidimensional Poverty Index in Refugee Camps using Earth Observation and Machine Learning.</h4>
            <p className="space"></p>
            <div className="research_paper">
                <div className="paper paper1">
                    <img src="assets/study_africa.png" alt="paper1" className="img_paper"/>
                    <p className="space"></p>
                    <p>Estimating Neighborhood-Level Poverty in Africa...<a href="https://github.com/AIandGlobalDevelopmentLab/temporal-eo-wealth"> Link</a></p>
                </div>
                <div className="paper paper2">
                    <img src="assets/study_brazil.png" alt="paper1" className="img_paper"/>
                    <p className="space"></p>
                    <p>Predicting socioeconomic indicators using...<a href="https://link.springer.com/article/10.1007/s10708-022-10618-3"> Link</a></p>
                </div>
            </div>
            <p className="space"></p>
            <div className="research_paper">
                <div className="paper paper1">
                    <img src="assets/study_columbia.png" alt="paper1" className="img_paper"/>
                    <p className="space"></p>
                    <p>Predicting MPI with ML using E.O...<a href="https://www.mdpi.com/2076-0760/12/5/296"> Link</a></p>
                </div>
            </div>
        </div>
    );
}

export default Document;