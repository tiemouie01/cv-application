/* eslint-disable react/prop-types */
import { useState } from "react";

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
    <form action="#">
      <p>
        <label htmlFor="company">Company Name: </label>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="position">Position Title: </label>
        <input
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="resp">Responsibilities:</label>
        <textarea
          name="responisibilites"
          id="resp"
          value={respies}
          onChange={(e) => {
            setRespies(e.target.value);
          }}
        ></textarea>
      </p>
      <p>
        <label htmlFor="sdate">Start Date</label>
        <input
          type="date"
          name="sdate"
          id="sdate"
          value={sDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="edate">Start Date</label>
        <input
          type="date"
          name="edate"
          id="edate"
          value={eDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handlePracticalInfo(company, position, respies, sDate, eDate);
          setFilled(true);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default PracticalForm;
