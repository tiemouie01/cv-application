/* eslint-disable react/prop-types */
const Resume = ({ generalInfo, educationInfo }) => {
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
          School: {educationInfo.school}<br />
          Programme of Study: {educationInfo.programme} <br />
          Year of Completion: {educationInfo.year}
        </p>
      </article>
    </section>
  );
};

export default Resume;
