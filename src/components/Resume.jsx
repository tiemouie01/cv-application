/* eslint-disable react/prop-types */
const Resume = ({ generalInfo, educationInfo, practicalInfo }) => {
  return (
    <section className="fixed right-3 col-span-3 p-2 shadow-md font-sans border-4 border-indigo-950 bg-indigo-100 w-1/2">
      <article className="p-4 text-center space-y-2 border-b-4 border-indigo-950">
        <h1 className="text-5xl font-bold">{generalInfo.name}</h1>
        <p className="text-lg">{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </article>
      <article className="p-4 space-y-2 border-b-4 border-indigo-950">
        <h2 className="text-3xl font-semibold">Educational Experience</h2>
        <p>
          School: <strong className="text-xl">{educationInfo.school}</strong>
        </p>
        <p>
          Programme of Study:{" "}
          <strong className="text-xl">{educationInfo.programme}</strong>{" "}
        </p>
        <p>
          Year of Completion:{" "}
          <strong className="text-xl">{educationInfo.year}</strong>
        </p>
      </article>
      <article className="p-4 space-y-2">
        <h2 className="text-3xl font-semibold">Practical Experience</h2>
        <p>Company: <strong className="text-xl">{practicalInfo.companyName}</strong></p>
        <p>Position: <strong className="text-xl">{practicalInfo.positionTitle}</strong></p>
        <p>Responsibilities: <strong className="text-xl">{practicalInfo.responsibilities}</strong></p>
        <p>Start Date: <strong className="text-xl">{practicalInfo.startDate}</strong></p>
        <p>End Date: <strong className="text-xl">{practicalInfo.endDate}</strong></p>
      </article>
    </section>
  );
};

export default Resume;
