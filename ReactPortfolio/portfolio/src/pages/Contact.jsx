import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="about-title">
        <h1 className="background-text">CONTACT</h1>
        <h2 className="main-heading">Get In Touch<span className="underline"></span></h2>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>ADDRESS</h3>
            <p>W2/D-12-1,<br/>Pattalamman Kovil Street<br/>Lakshmipuram, Theni District</p>
            <p><i className="fas fa-phone-alt" aria-hidden></i> 984291710</p>
            <p><i className="fas fa-envelope" aria-hidden></i> devakimathivarma@gmail.com</p>
          </div>

          <div className="contact-form">
            <h3>SEND A NOTE</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
}
