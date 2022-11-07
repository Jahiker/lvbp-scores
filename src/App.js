import { useEffect } from "react";
import "./App.css";

import { scoresUrl, scoresOptions } from "./Api";

function App() {
  useEffect(() => {
    const getScores = async (url, options) => {
      await fetch(url, options)
        .then((resp) => resp.text())
        .then((html) => {
          console.log("UPDATE SCORES")
          document.querySelector(".App").innerHTML = html;
        })
        .catch((err) => console.error(err));
    };

    getScores(scoresUrl, scoresOptions)

    const interval = setInterval(() => {getScores(scoresUrl, scoresOptions)}, 30000);

    return () => clearInterval(interval);
  }, []);

  return <div className="App"></div>;
}

export default App;
