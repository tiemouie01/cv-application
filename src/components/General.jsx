/* eslint-disable react/prop-types */
const General = ({ generalInfo, handler }) => {
  const prevName = generalInfo.name;
  const prevEmail = generalInfo.email;
  const prevPhone = generalInfo.phone;

  const submit = (formData) => {
    const name = formData.get("name");
    const email = formData.get("mail");
    const phone = formData.get("phone");

    handler({ name, email, phone });
  };

  return (
    <form action={submit}>
      <p>
        <label htmlFor="name">Fullname: </label>
        <input type="text" name="name" id="name" value={prevName} />
      </p>
      <p>
        <label htmlFor="mail">Email: </label>
        <input type="email" name="mail" id="mail" value={prevEmail} />
      </p>
      <p>
        <label htmlFor="phone-number">Phone Number: </label>
        <input type="text" name="phone" id="phone-number" value={prevPhone} />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default General;
