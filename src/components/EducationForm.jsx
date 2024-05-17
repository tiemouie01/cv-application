/* eslint-disable react/prop-types */
import React, { useState } from "react";

const EducationForm = ({
  school,
  prg,
  year,
  handleEducationInfo,
  setFilled,
}) => {
  const [schoolName, setSchoolName] = useState(school);
  const [programme, setProgramme] = useState(prg);
  const [completionYear, setCompletionYear] = useState(year);

  return (
    <form action="#">
      <p>
        <label htmlFor="school">School Name: </label>
        <input
          type="text"
          id="school"
          name="school"
          value={schoolName}
          onChange={(e) => {
            setSchoolName(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="prg">Programme of Study: </label>
        <input
          type="text"
          name="programme"
          id="prg"
          value={programme}
          onChange={(e) => {
            setProgramme(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="year">Year of Completion</label>
        <input
          type="text"
          name="year"
          id="year"
          value={completionYear}
          onChange={(e) => {
            setCompletionYear(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleEducationInfo(schoolName, programme, completionYear);
          setFilled(true);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default EducationForm;