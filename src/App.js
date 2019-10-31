import React, { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [quote, setQuote] = useState(null);

  async function getSimpsonQuotes() {
    try {
      const response = await fetch(
        "https://quests.wilders.dev/simpsons-quotes/quotes"
      );
      console.log("hehe");
      const jsonResponse = await response.json();
      setQuote(jsonResponse[0]);
    } catch (err) {
      setQuote("error");
    }
  }

  useEffect(() => {
    getSimpsonQuotes();
  }, []);

  if (quote === null) return <div>loading</div>;
  return (
    <div className="App">
      {console.log("j'ai ma reponse")}

      <header className="App-header">
        {quote ? (
          <>
            <img src={quote.image} className="App-logo" alt="logo"></img>
            <p>{quote.quote}</p>
            <p>{quote.character}</p>
          </>
        ) : (
          <div> "Loading" </div>
        )}
      </header>
    </div>
  );
}

export default App;
