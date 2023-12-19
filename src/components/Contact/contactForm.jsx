import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6nla1o", //'YOUR_SERVICE_ID'
        "template_ktp5uaz", //'YOUR_TEMPLATE_ID'
        form.current,
        "mENc7MvHLrEjz4iwE" //'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-info form">
      {" "}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Emri
          </label>
          <input
            type="text"
            name="from_name"
            className="contact-form-input"
            placeholder="Shkuaj Emrin"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Numri i tel
          </label>
          <input
            type="number"
            name="from_mobile"
            className="contact-form-input"
            placeholder="Shkuaj Numrin"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Emaili
          </label>
          <input
            type="email"
            name="from_email"
            className="contact-form-input"
            placeholder="Shkuaj Emailin"
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
      <ToastContainer
        position="top-center"
        autoClose={5000} // Close the notification after 5 seconds
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default contactForm;
