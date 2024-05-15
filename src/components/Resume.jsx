/* eslint-disable react/prop-types */
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
