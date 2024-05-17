/* eslint-disable react/prop-types */
const Resume = ({ generalInfo, educationInfo, practicalInfo }) => {
  return (
    <section>
      <article>
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </article>
      <article>
        <h2>Educational Experience</h2>
        <p>
          School: {educationInfo.school}
          <br />
          Programme of Study: {educationInfo.programme} <br />
          Year of Completion: {educationInfo.year}
        </p>
      </article>
      <article>
        <h2>Practical Experience</h2>
        <p>Company: {practicalInfo.companyName}</p>
        <p>Position: {practicalInfo.positionTitle}</p>
        <p>Responsibilities: {practicalInfo.responsibilities}</p>
        <p>Start Date: {practicalInfo.startDate}</p>
        <p>End Date: {practicalInfo.endDate}</p>
      </article>
    </section>
  );
};

export default Resume;
