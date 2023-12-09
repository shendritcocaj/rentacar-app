const contactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-card">
        <i className="uil uil-envelope-minus"></i>
        <h3 className="contact-card-title">Email</h3>
        <span className="contact-card-data mail">
          rentacarroberti@hotmail.com
        </span>
        <a
          href="mailto:rentacarroberti@hotmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          Na shkruaj <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
      <div className="contact-card">
        <i className="uil uil-whatsapp"></i>
        <h3 className="contact-card-title">Whatsapp</h3>
        <span className="contact-card-data"> 049 518 518</span>
        <a
          href="https://wa.me/+38349518518"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          Na shkruaj <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
      <div className="contact-card">
        <i className="uil uil-facebook-messenger-alt"></i>
        <h3 className="contact-card-title mesenger">Messenger</h3>
        <span className="contact-card-data">Rent a car Roberti</span>
        <a
          href="https://m.me/roberti"
          rel="noreferrer"
          target="_blank"
          className="contact-button"
        >
          Na shkruaj <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default contactInfo;
