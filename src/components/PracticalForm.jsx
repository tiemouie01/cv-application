/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PracticalForm = ({
  companyName,
  positionTitle,
  responsibilities,
  startDate,
  endDate,
  handlePracticalInfo,
  setFilled,
}) => {
  const [company, setCompany] = useState(companyName);
  const [position, setPosition] = useState(positionTitle);
  const [respies, setRespies] = useState(responsibilities);
  const [sDate, setStartDate] = useState(startDate);
  const [eDate, setEndDate] = useState(endDate);

  return (
    <form action="#" className="space-y-3">
      <p className="flex flex-wrap items-center gap-2">
        <label htmlFor="company">Company Name: </label>
        <input
          type="text"
          name="company"
          id="company"
          className="border p-2 rounded flex-1"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </p>
      <p className="flex flex-wrap items-center gap-2">
        <label htmlFor="position">Position Title: </label>
        <input
          type="text"
          name="position"
          id="position"
          className="border p-2 rounded flex-1"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </p>
      <p className="flex flex-col">
        <label htmlFor="resp">Responsibilities:</label>
        <textarea
          name="responisibilites"
          id="resp"
          className="border p-2 rounded"
          value={respies}
          onChange={(e) => {
            setRespies(e.target.value);
          }}
        ></textarea>
      </p>
      <p className="flex justify-center items-center">
        <label htmlFor="sdate">Start Date: </label>
        <input
          type="date"
          name="sdate"
          id="sdate"
          className="border p-2 rounded"
          value={sDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
      </p>
      <p className="flex justify-center items-center">
        <label htmlFor="edate">End Date: </label>
        <input
          type="date"
          name="edate"
          id="edate"
          className="border p-2 rounded"
          value={eDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-auto mt-3"
        onClick={(e) => {
          e.preventDefault();
          handlePracticalInfo(company, position, respies, sDate, eDate);
          setFilled(true);
        }}
      >
        Submit
        <FaCheckCircle />
      </button>
    </form>
  );
};

export default PracticalForm;
