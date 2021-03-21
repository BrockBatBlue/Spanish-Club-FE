import React from "react";
import "../../Styles/Pages/ContactUs.css";
import ContactUsForm from "../Elements/ContactUsForm.jsx";
import Background from "../../assets/images/Contact-us.png";

function ContactUs() {
  return (
    <div
      className="contactUsPic d-flex container-fluid"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
