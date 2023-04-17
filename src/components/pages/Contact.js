import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

import "../../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "template_c0t0v3r",
        form.current,
        "homvi0r9VVRcfzxkw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [emailError, setEmailError] = useState("");
  const [hasMessage, setHasMessage] = useState("");

  function validateEmail(e) {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    }
    if (!validator.isEmail(email)) {
      setEmailError("Enter a valid email adress.");
    }
  }

  function validateMessage(e) {
    const message = e.target.value;

    if (message) {
      setHasMessage("");
    }
    if (!message) {
      setHasMessage("A message is required to contact me.");
    }
  }

  return (
    <div className="form-page">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" required />
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          onBlur={(e) => validateEmail(e)}
          required
        />
        <label>Message:</label>
        <textarea name="message" onBlur={(e) => validateMessage(e)} required />
        <div>{emailError}</div>
        <div>{hasMessage}</div>
        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
