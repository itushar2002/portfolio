import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_scbkpa3", "template_0n1bozn", form.current, {
        publicKey: "GoHevz6lG3dyuTa05",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert(" MESSAGE SENT SUCCESFULLY!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="email">
      <div className="flex-div">
        <h1>contact</h1>
        <hr />
        <h5>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h5>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input id="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
