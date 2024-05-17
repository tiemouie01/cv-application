/* eslint-disable react/prop-types */
import React, { useState } from "react";
import GeneralForm from "./GeneralForm";

const General = ({ generalInfo, handleGeneralInfo }) => {
  const [filled, setFilled] = useState(false);
  const name = generalInfo.name;
  const email = generalInfo.email;
  const phone = generalInfo.phone;

  return (
    <section>
      <h1>Personal Information</h1>
      {filled ? (
        <button
          onClick={() => {
            setFilled(false);
          }}
        >
          Edit
        </button>
      ) : (
        <GeneralForm
          name={name}
          email={email}
          phone={phone}
          handleGeneralInfo={handleGeneralInfo}
          setFilled={setFilled}
        />
      )}
    </section>
  );
};

export default General;
