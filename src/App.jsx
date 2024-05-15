import "./App.css";
import React, { useState } from "react";
import General from "./components/General";
import Resume from "./components/Resume";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});

  const handleGeneralInfo = (name, email, phone) => {
    setGeneralInfo({ name, email, phone });
  };

  return (
    <main>
      <General generalInfo={generalInfo} handler={handleGeneralInfo} />
      <Resume generalInfo={generalInfo} />
    </main>
  );
}

export default App;
