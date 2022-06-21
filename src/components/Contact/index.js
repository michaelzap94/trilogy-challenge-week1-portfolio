import React, { useState } from "react";
import { checkEmailIsValid } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMsg) {
      console.log("Submitting Form", formState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const isValid = checkEmailIsValid(value);
      setErrorMsg(isValid ? "" : "Your 'email' is invalid.");
    } else {
      setErrorMsg(value.length ? "" : `Your '${name}' is required.`);
    }
    if (!errorMsg) {
      setFormState({ ...formState, [name]: value });
    }
  };
  return (
    <section>
      {errorMsg}
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          defaultValue={formState.name}
          onBlur={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          defaultValue={formState.email}
          onBlur={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows="10"
          id="message"
          name="message"
          placeholder="Write something.."
          defaultValue={formState.message}
          onBlur={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
