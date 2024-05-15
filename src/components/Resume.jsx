/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Resume = ({ generalInfo }) => {    
  return (
    <section>
      <article>
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </article>
    </section>
  );
};

export default Resume;