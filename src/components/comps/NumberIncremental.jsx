import React, { useEffect, useState } from "react";

const NumberIncremental = ({targetNumber, text, color}) => {
    const [currentNumber, setCurrentNumber] = useState(0)

    useEffect(() => {
    
        const interval = setInterval( () => {

            let increment = 100;
           
            if(targetNumber - currentNumber < 100) {
                increment = 5;
           
            }
            if(targetNumber - currentNumber <10) {
                increment = 1;
    
            }
            if(currentNumber < targetNumber) {
                setCurrentNumber( (prevNumber) => Math.min(prevNumber + increment, targetNumber));
            } else {
                clearInterval(interval)
            }
        }, 20);
        return () => clearInterval(interval);
    }, [currentNumber, targetNumber]);

    return (
        <div style={{color:`${color}`}} className="shadow-lg border-2 rounded-xl py-2 px-4 w-1/2">
            <h1 className="flex justify-center content-center mb-2">{currentNumber}+</h1>
            <p className="flex justify-center text-lg text-black ">{text}</p>
        </div>
    )
}

export default NumberIncremental;