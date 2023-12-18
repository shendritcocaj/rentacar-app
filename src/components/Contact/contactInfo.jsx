const contactInfo = () => {
  return (
    <div className="contact-info">
      <a
        href="mailto:rentacarroberti@hotmail.com"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <i className="uil uil-envelope-minus"></i>
        <h3 className="contact-card-title">Email</h3>
        <span className="contact-card-data mail">
          rentacar.roberti@gmail.com
        </span>
      </a>

      <a
        href="https://wa.me/+38349518518"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <i className="uil uil-whatsapp"></i>
        <h3 className="contact-card-title">Whatsapp</h3>
        <span className="contact-card-data"> +383 49 518 518</span>
      </a>
      <a
        href="https://m.me/rentacarroberti"
        rel="noreferrer"
        target="_blank"
        className="contact-card"
      >
        <i className="uil uil-facebook-messenger-alt"></i>
        <h3 className="contact-card-title mesenger">Messenger</h3>
        <span className="contact-card-data">Rent a car Roberti</span>
      </a>
    </div>
  );
};

export default contactInfo;
