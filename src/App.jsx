import "./App.css";
import React, { useState } from "react";
import General from "./components/General";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Practical from "./components/Practical";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [practicalInfo, setPracticalInfo] = useState({});

  const handleGeneralInfo = (name, email, phone) => {
    setGeneralInfo({ name, email, phone });
  };

  const handleEducationInfo = (school, programme, year) => {
    setEducationInfo({ school, programme, year });
  };

  const handlePracticalInfo = (
    companyName,
    positionTitle,
    responsibilities,
    startDate,
    endDate
  ) => {
    setPracticalInfo({
      companyName,
      positionTitle,
      responsibilities,
      startDate,
      endDate,
    });
  };

  return (
    <main>
      <section>
        <General
          generalInfo={generalInfo}
          handleGeneralInfo={handleGeneralInfo}
        />
        <Education
          educationInfo={educationInfo}
          handleEducationInfo={handleEducationInfo}
        />
        <Practical
          practicalInfo={practicalInfo}
          handlePracticalInfo={handlePracticalInfo}
        />
      </section>
      <Resume
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      />
    </main>
  );
}

export default App;
