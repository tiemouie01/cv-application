/* eslint-disable react/prop-types */
import React, { useState } from "react";
import EducationForm from "./EducationForm";

const Education = ({ educationInfo, handleEducationInfo }) => {
  const school = educationInfo.school;
  const programme = educationInfo.programme;
  const completionYear = educationInfo.year;
  const [filled, setFilled] = useState(false);

  return (
    <section>
      <h1>Educational Information</h1>
      {filled ? (
        <button
          onClick={() => {
            setFilled(false);
          }}
        >
          Edit
        </button>
      ) : (
        <EducationForm
          school={school}
          prg={programme}
          year={completionYear}
          handleEducationInfo={handleEducationInfo}
          setFilled={setFilled}
        />
      )}
    </section>
  );
};

export default Education;
