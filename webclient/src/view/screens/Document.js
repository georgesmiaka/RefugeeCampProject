import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Document() {

    useEffect(() => {
        console.log("Hello Document")
    }, []);

    return (
        <div className="Body">
            <h1>Document</h1>
        </div>
    );
}

export default Document;