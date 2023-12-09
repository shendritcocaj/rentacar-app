import { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovdixnu",
        "template_cg9ny1m",
        form.current,
        "kICO628dZkkGJpvd_"
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

  return (
    <div className="contact-info form">
      {" "}
      {/* <div className="contact-content-title">Sheno ne email</div> */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Emri
          </label>
          <input
            type="text"
            name="user_name"
            className="contact-form-input"
            placeholder="Shkuaj Emrin"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Emaili
          </label>
          <input
            type="email"
            name="user_email"
            className="contact-form-input"
            placeholder="Shkuaj Emailin"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Numri i tel
          </label>
          <input
            type="number"
            name="user_number"
            className="contact-form-input"
            placeholder="Shkuaj Numrin"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Mesazhi
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="contact-form-input"
            placeholder="Shkuaj mesazhin"
          ></textarea>
        </div>
        <div className="form-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default contactForm;
