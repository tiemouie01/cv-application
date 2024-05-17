/* eslint-disable react/prop-types */
import React, { useState } from "react";

const General = ({ generalInfo, handler }) => {
  const [currentName, setCurrentName] = useState(generalInfo.name);
  const [currentEmail, setCurrentEmail] = useState(generalInfo.email);
  const [currentPhone, setCurrentPhone] = useState(generalInfo.phone);

  return (
    <section>
      <h1>Personal Information</h1>
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
            handler(currentName, currentEmail, currentPhone);
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default General;
