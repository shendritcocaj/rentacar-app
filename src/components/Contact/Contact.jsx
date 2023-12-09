import "./contact.css";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div className="scroll-position">
      <section id="contact">
        <div className="contact container">
          <div className="contact-top-info">
            <div className="contact-title">Kontakti</div>
            <div className="line-bottom"></div>
          </div>
          <div className="contact-bottom-info">
            {" "}
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Contact;
