/* eslint-disable react/prop-types */
import { useState } from "react";

const GeneralForm = ({ name, email, phone, handleGeneralInfo, setFilled }) => {
  const [currentName, setCurrentName] = useState(name);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [currentPhone, setCurrentPhone] = useState(phone);

  return (
    <form action="#">
      <p>
        <label htmlFor="name">Fullname: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={currentName}
          onChange={(e) => {
            setCurrentName(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="mail">Email: </label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={currentEmail}
          onChange={(e) => {
            setCurrentEmail(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="phone-number">Phone Number: </label>
        <input
          type="text"
          name="phone"
          id="phone-number"
          value={currentPhone}
          onChange={(e) => {
            setCurrentPhone(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleGeneralInfo(currentName, currentEmail, currentPhone);
          setFilled(true);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default GeneralForm;
