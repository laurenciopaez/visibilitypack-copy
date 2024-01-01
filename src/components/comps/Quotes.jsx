import React, { useEffect, useState } from "react";
import Quote from "./Quote";
 // Asegúrate de importar o definir el componente Cuota

const Quotes = () => {

  const quotesData = [
    "Excelente servicio. Los seguidores son reales y llegan en minutos. Una verdadera sorpresa! Prueba el servicio.",
    "Estoy muy satisfecho con los likes que he recibido y son perfiles en español de mi país! Estoy muy feliz con este servicio.",
    "Gracias a este servicio conseguí 9 colaboraciones este mes. Las empresas me han contratado para colaborar y promocionar sus productos. De verdad un gran servicio que recomiendo.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote( (prevQuote) => (prevQuote +1) %quotesData.length)
  }

  const prevQuote = () => {
    setCurrentQuote(( prevQuote) => prevQuote === 0 ? quotesData.length -1 : prevQuote -1)
  }

  useEffect( () => {
    const intervalId = setInterval( () => {
        setCurrentQuote( (prevQuote) => (prevQuote+1) % quotesData.length);
    }, 2500)

    return () => clearInterval(intervalId)
  }, currentQuote, quotesData.length)

  return (
    <div className="flex overflow-hidden w-full justify-center content-center">
    <div className="flex space-x-4">
      <button onClick={prevQuote}>&lt;</button>
      <div className="w-full">
        <Quote monto={quotesData[currentQuote]} />
      </div>
      <button onClick={nextQuote}>&gt;</button>
    </div>
  </div>
  );
};

export default Quotes;
