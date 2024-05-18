/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EducationForm from "./EducationForm";

const Education = ({ educationInfo, handleEducationInfo }) => {
  const school = educationInfo.school;
  const programme = educationInfo.programme;
  const completionYear = educationInfo.year;
  const [filled, setFilled] = useState(false);

  return (
    <section className="p-4 rounded-xl shadow-md border space-y-2">
      <h1 className="text-2xl text-center font-semibold">Educational Information</h1>
      <TransitionGroup>
        {filled ? (
          <CSSTransition key="editButton" timeout={500} classNames="fade">
            <button
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-auto"
              onClick={() => {
                setFilled(false);
              }}
            >
              Edit
              <FaRegPenToSquare />
            </button>
          </CSSTransition>
        ) : (
          <CSSTransition key="generalForm" timeout={500} classNames="fade">
            <EducationForm
              school={school}
              prg={programme}
              year={completionYear}
              handleEducationInfo={handleEducationInfo}
              setFilled={setFilled}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};

export default Education;
