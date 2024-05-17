/* eslint-disable react/prop-types */
import { useState } from "react";
import PracticalForm from "./PracticalForm";

const Practical = ({ practicalInfo, handlePracticalInfo }) => {
  const [filled, setFilled] = useState(false);
  const companyName = practicalInfo.companyName;
  const positionTitle = practicalInfo.positionTitle;
  const responsibilities = practicalInfo.responsibilities;
  const startDate = practicalInfo.startDate;
  const endDate = practicalInfo.endDate;

  return (
    <section>
      <h1>Practical Experience Information</h1>
      {filled ? (
        <button
          onClick={() => {
            setFilled(false);
          }}
        >Edit</button>
      ) : (
        <PracticalForm
          companyName={companyName}
          positionTitle={positionTitle}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
          handlePracticalInfo={handlePracticalInfo}
          setFilled={setFilled}
        />
      )}
    </section>
  );
};

export default Practical;
