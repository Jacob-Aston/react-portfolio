//  A contact form to contact me via email using emailjs.
//  emailjs sends emails for free without redirecting or using ads.
//  validator is used to validate the contact form data before attempting to run emailjs.

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

import "../../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  // A function to send an email using emailjs.
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

  //  States to indicate data errors to the user. Must enter a proper email format and enter a message to press send.
  const [emailError, setEmailError] = useState("");
  const [hasMessage, setHasMessage] = useState("");

  //  A function to validate email format entered on contact form using validator.
  function validateEmail(e) {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    }
    if (!validator.isEmail(email)) {
      setEmailError("Enter a valid email adress.");
    }
  }

  //  A function to verify input form contains message data.
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
      <h2>Contact</h2>
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
        <div className="contact-validation">{emailError}</div>
        <div className="contact-validation">{hasMessage}</div>
        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}
