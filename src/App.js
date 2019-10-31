import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});

  async function getSimpsonQuotes() {
    try {
      const response = await fetch(
        "https://quests.wilders.dev/simpsons-quotes/quotes"
      );
      const jsonResponse = await response.json();
      setQuote(jsonResponse[0]);
    } catch (err) {
      console.log("lalala");
      console.error("err");
    }
  }
  console.log(quote);
  return (
    <div className="App">
      <header className="App-header">
        <img src={quote.image} className="App-logo" alt="logo"></img>
        <p>{quote.quote}</p>
        <p>{quote.character}</p>

        <button onClick={getSimpsonQuotes}>Récuperer un citation</button>
      </header>
    </div>
  );
}

export default App;
