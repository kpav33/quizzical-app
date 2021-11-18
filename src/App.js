import React, { useState, useEffect } from "react";

function App() {
  // https://opentdb.com/api.php?amount=5

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Quizzical</h1>
    </div>
  );
}

export default App;
