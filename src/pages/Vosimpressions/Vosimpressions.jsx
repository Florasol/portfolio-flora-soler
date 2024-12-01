import React, { useState } from "react";

// Import components
import Banner from '../../components/Banner/Banner';

// Import image
import contactBanner from '../../assets/contactbanner.jpg';

// Import style
import './vosimpressions.scss';

function Vosimpressions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation : vérifier que tous les champs sont remplis
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Votre message a bien été envoyé !");
      setFormData({ name: "", email: "", message: "" }); // Réinitialise les champs du formulaire
    } else {
      setSuccessMessage("Veuillez remplir tous les champs.");
    }
  }

  return (
    <div>
      {/* Bannière */}
      <Banner
        picture={contactBanner}
        title=""
        className="banner"
      />

      {/* Formulaire de contact */}
      <div className="contact-container">
        <h2>Laissez un avis!</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici"
              required
            />
          </div>

          <button type="submit" className="submit-button">Envoyer</button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default Vosimpressions;