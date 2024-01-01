import React from "react";

const Quote = ({monto}) => {
    return (
        <div className="w-full text-center flex content-center text-xl mx-auto font-accent text-black">
            {monto}
        </div>
    )
}

export default Quote;