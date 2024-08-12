import React, { useState, useEffect } from "react";
import "../Counter.css";

function Counter(){

    let count = 0;

    useEffect( () => {
        window.alert("I am clicked!");
    });

    // valeur actuelle et valeur mise à jour , useState contient la valeur initiale count = 0;
    const [currentstate, updatedstate] = useState(count);//initialisation de useState

    const handleclick = () =>{
        updatedstate(currentstate + 1);
    };

    return (
         <>
            <div className="counter_parent">
                <div className="main-div">
                    <h3>Counter</h3>
                    <button onClick={handleclick}>{currentstate}</button>
                </div>
            </div>
        </>
    );
}

export default Counter;