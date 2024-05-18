/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
    <form action="#" className="space-y-3">
      <p>
        <label htmlFor="school">School Name: </label>
        <input
          type="text"
          id="school"
          className="border p-2 rounded"
          name="school"
          value={schoolName}
          onChange={(e) => {
            setSchoolName(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="prg">Programme: </label>
        <input
          type="text"
          name="programme"
          className="border p-2 rounded"
          id="prg"
          value={programme}
          onChange={(e) => {
            setProgramme(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="year">Year Completed: </label>
        <input
          type="text"
          name="year"
          id="year"
          className="border p-2 rounded"
          value={completionYear}
          onChange={(e) => {
            setCompletionYear(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-auto mt-3"
        onClick={(e) => {
          e.preventDefault();
          handleEducationInfo(schoolName, programme, completionYear);
          setFilled(true);
        }}
      >
        Submit 
        <FaCheckCircle />
      </button>
    </form>
  );
};

export default EducationForm;
