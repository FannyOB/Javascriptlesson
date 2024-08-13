import React from "react";
import "./Calculatrice.css";
import { useState } from "react";

function Calcutatrice(){

    const [result, setResult] = useState("")

    //fonction qui va gérer la concaténation des touches
    const clickhandler = (event) => {
        setResult(result.concat(event.target.value));
    };

    //fonction qui va gérer la suppression
    const cleardisplay = ()=> {
        setResult("");
    };

    //fonction qui va gérer le calcul: eval, pour évaluer la valeur de l’opération autrement dit pour avoir le résultat final
    const calculate = () => {
        setResult(eval(result).toString()) //si erreur, convertira en chaine de caractère
    }

    return(
        <>
            <p>Cest une calculatrice</p>
            <div className="calc">
                <input type="text" placeholder="0" id="answer" value={result} />
                <input type="button" value="9" className="button" onClick={clickhandler} />
                <input type="button" value="8" className="button" onClick={clickhandler}  />
                <input type="button" value="7" className="button" onClick={clickhandler}  />
                <input type="button" value="6" className="button" onClick={clickhandler}  />
                <input type="button" value="5" className="button" onClick={clickhandler}  />
                <input type="button" value="4" className="button" onClick={clickhandler}  />
                <input type="button" value="3" className="button" onClick={clickhandler}  />
                <input type="button" value="2" className="button" onClick={clickhandler}  />
                <input type="button" value="1" className="button" onClick={clickhandler}  />

                <input type="button" value="0" className="button" onClick={clickhandler}  />
                <input type="button" value="+" className="button" onClick={clickhandler}  />
                <input type="button" value="-" className="button" onClick={clickhandler}  />
                <input type="button" value="/" className="button" onClick={clickhandler}  />
                <input type="button" value="*" className="button" onClick={clickhandler}  />
                <input type="button" value="%" className="button" onClick={clickhandler}  />
                <input type="button" value="." className="button" onClick={clickhandler}  />

                <input type="button" value="Clear" className="button button1" onClick={cleardisplay}  />
                <input type="button" value="=" className="button button1" onClick={calculate}  />

            </div>
        </>
    )
}

export default Calcutatrice;