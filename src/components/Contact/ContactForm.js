import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const [isSumbmitted, setIsSubmitted] = useState(false);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && subjectIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs.sendForm(
      "service_faa59ma",
      "template_to6pzdb",
      form.current,
      "jpIw7wsLQ7erWqC09"
    );

    setIsSubmitted(true);
    resetName();
    resetSubject();
    resetEmail();
    resetMessage();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {isSumbmitted && (
        <small className="error-text">Send your message successfully!</small>
      )}
      <input
        type="text"
        name="name"
        id="name"
        value={nameValue}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        placeholder="Your Full Name"
      />
      {nameHasError && (
        <small className="error-text">Enter your full name</small>
      )}
      <input
        type="email"
        name="email"
        id="email"
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        placeholder="Your Email Address"
      />
      {emailHasError && <small className="error-text">Enter Valid email</small>}
      <input
        type="text"
        name="subject"
        id="subject"
        value={subjectValue}
        onChange={subjectChangeHandler}
        onBlur={subjectBlurHandler}
        placeholder="Your Subject"
      />
      {subjectHasError && <p className="error-text">Enter your subject</p>}
      <textarea
        name="message"
        id="message"
        value={messageValue}
        onChange={messageChangeHandler}
        onBlur={messageBlurHandler}
        rows="7"
        placeholder="Your Message"
      ></textarea>
      {messageHasError && <p className="error-text">Enter your message</p>}
      <button
        type="submit"
        className="btn btn-primary contact-form__button"
        disabled={!formIsValid}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
