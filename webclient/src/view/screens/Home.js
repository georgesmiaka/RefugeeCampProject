import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    useEffect(() => {
        console.log("Hello Home")
    }, []);

    return (
        <div className="Body">
            <h1>Welcome Home</h1>
        </div>
    );
}

export default Home;