import "./App.css";
import React, { useState } from "react";
import General from "./components/General";
import Resume from "./components/Resume";
import Education from "./components/Education";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  const handleGeneralInfo = (name, email, phone) => {
    setGeneralInfo({ name, email, phone });
  };

  const handleEducationInfo = (school, programme, year) => {
    setEducationInfo({ school, programme, year });
  };

  return (
    <main>
      <General generalInfo={generalInfo} handleGeneralInfo={handleGeneralInfo} />
      <Education
        educationInfo={educationInfo}
        handleEducationInfo={handleEducationInfo}
      />
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} />
    </main>
  );
}

export default App;
