import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {

    useEffect(() => {
        console.log("Hello About")
    }, []);

    return (
        <div className="Body">
            <h1>About</h1>
        </div>
    );
}

export default About;