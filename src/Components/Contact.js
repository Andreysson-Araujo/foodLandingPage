import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Alguma Duvida ?</h1>
      <h1 className="primary-heading">Envie para nós</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="exemplo@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;