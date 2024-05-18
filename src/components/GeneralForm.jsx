/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const GeneralForm = ({ name, email, phone, handleGeneralInfo, setFilled }) => {
  const [currentName, setCurrentName] = useState(name);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [currentPhone, setCurrentPhone] = useState(phone);

  return (
    <form action="#" className="space-y-3">
      <p>
        <label htmlFor="name">Name: </label>
        <input
          className="border p-2 rounded"
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
          className="border p-2 rounded"
          value={currentEmail}
          onChange={(e) => {
            setCurrentEmail(e.target.value);
          }}
        />
      </p>
      <p>
        <label htmlFor="phone-number">Phone: </label>
        <input
          type="text"
          name="phone"
          id="phone-number"
          className="border p-2 rounded"
          value={currentPhone}
          onChange={(e) => {
            setCurrentPhone(e.target.value);
          }}
        />
      </p>
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-auto mt-3"
        onClick={(e) => {
          e.preventDefault();
          handleGeneralInfo(currentName, currentEmail, currentPhone);
          setFilled(true);
        }}
      >
        Submit
        <FaCheckCircle />
      </button>
    </form>
  );
};

export default GeneralForm;
