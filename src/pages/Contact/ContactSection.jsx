import "./contactSection.css";
import shape from "../../assets/contactShape.png";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-info">
          <img src={shape} alt="" />
          <h1>Get in touch with us</h1>
          <p>398 11th St, San Francisco</p>
        </div>

        <form className="contact-form" action="">
          <h1>We will get back to you as soon as possible.</h1>
          <div className="name">
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="LastName" />
          </div>
          <input className="email" type="email" placeholder="Work email" />
          <input className="subject" type="text" placeholder="Subject" />
          <textarea className="text-area" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
