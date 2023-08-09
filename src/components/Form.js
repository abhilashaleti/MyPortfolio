import "./Form.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m1g3acl",
      "template_y2oclih",
      form.current,
      "w91B3A_288BgSCPyL"
    );
    e.target.reset();
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name </label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Email </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type your message"
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
