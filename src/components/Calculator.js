import { useEffect, useState } from "react";
import React from "react";

export default function Calculator(props){

    const [currentNumber, setCurrentNumber] = useState("");
    const [currentOperator, setCurrentOperator] = useState("");
    const [lastNumber, setLastNumber] = useState("");



    function solve(){

        let solvedNumber

         if(currentOperator==="+"){
             solvedNumber=parseInt(lastNumber)+parseInt(currentNumber);
             setCurrentNumber(solvedNumber.toString());
             setCurrentOperator("");
             setLastNumber("");
         }else if(currentOperator==="-"){
             solvedNumber=parseInt(lastNumber)-parseInt(currentNumber);
             setCurrentNumber(solvedNumber.toString());
             setCurrentOperator("");
             setLastNumber("");
         }else if(currentOperator==="X"){
            solvedNumber=parseInt(lastNumber)*parseInt(currentNumber);
            setCurrentNumber(solvedNumber.toString());
            setCurrentOperator("");
            setLastNumber("");
         }else if(currentOperator==="/"){
            solvedNumber=parseInt(lastNumber)/parseInt(currentNumber);
            setCurrentNumber(solvedNumber.toString());
            setCurrentOperator("");
            setLastNumber("")
         }else{
             console.log("Never pressed operator");
         }
    };

    function pressOperator(event){
        setLastNumber(currentNumber)
        setCurrentOperator(event.target.innerText)
        setCurrentNumber("")
    }

    function setDisplayNumber(number){

        let setterString = currentNumber;

            setCurrentNumber(setterString+=number);
            console.log(number);
    }

    function clear(){
        setCurrentNumber("");
        setCurrentOperator("");
        setLastNumber("")
    }



    return(
            <div className="calculator-container">
                <div className="calculator-screen-container">
                    <span>{currentNumber}</span>
                </div>
                <div className="calculator-button-container">
                    <div className="calculator-button-rows">
                        <div className="button-row">
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">7</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">4</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">1</button>
                            <button onClick={(event)=>{clear()}} className="calculator-button" id="clear-button">C</button>
                        </div>
                        <div className="button-row">
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">8</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">5</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">2</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">0</button>
                        </div>
                        <div className="button-row">
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">9</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">6</button>
                            <button onClick={(event)=>{setDisplayNumber(event.target.innerText)}} className="calculator-button">3</button>
                            <button onClick={(event)=>{solve()}} className="calculator-button" id="equal-button">=</button>
                        </div>
                        <div className="button-row">
                            <button onClick={(event)=>{pressOperator(event)}} className="calculator-button" id="operator-button">X</button>
                            <button onClick={(event)=>{pressOperator(event)}} className="calculator-button" id="operator-button">-</button>
                            <button onClick={(event)=>{pressOperator(event)}} className="calculator-button" id="operator-button">+</button>
                            <button onClick={(event)=>{pressOperator(event)}} className="calculator-button">/</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}