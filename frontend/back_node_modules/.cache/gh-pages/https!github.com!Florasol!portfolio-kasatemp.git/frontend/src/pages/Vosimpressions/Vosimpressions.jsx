import React, { useState, useEffect } from "react";

// Import components
import Banner from "../../components/Banner/Banner";
import MessageDisplay from "../../components/MessageDisplay/MessageDisplay"; 
// Import image
import contactBanner from "../../assets/contactbanner.jpg";

// Import style
import "./vosimpressions.scss";

function Vosimpressions() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]); // Stocke tous les messages soumis

  // Vérifier si localStorage est disponible
  const isLocalStorageAvailable = () => {
    try {
      const testKey = "__test__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      console.error("localStorage non disponible :", error);
      return false;
    }
  };

  // Charger les messages stockés depuis le localStorage au montage
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      const storedMessages = JSON.parse(localStorage.getItem("submittedMessages")) || [];
      console.log("Messages chargés depuis localStorage :", storedMessages);
      setSubmittedMessages(storedMessages);
    }
  }, []);  // Ajoutez un tableau de dépendances vide pour ne le faire qu'une seule fois au montage

  // Sauvegarder les messages dans le localStorage à chaque mise à jour
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      if (submittedMessages.length > 0) {  // Ajoutez une vérification pour ne pas sauvegarder une liste vide
        localStorage.setItem("submittedMessages", JSON.stringify(submittedMessages));
        console.log("Messages sauvegardés dans localStorage :", submittedMessages);
      }
    }
  }, [submittedMessages]); // Cette dépendance assure que l'état sera sauvegardé à chaque modification

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
    if (formData.name && formData.message) {
      const newMessage = { ...formData };
      setSubmittedMessages([...submittedMessages, newMessage]); // Ajoute le nouveau message à la liste
      setSuccessMessage("Votre message a bien été envoyé !");
      setFormData({ name: "", message: "" }); // Réinitialise les champs du formulaire
    } else {
      setSuccessMessage("Veuillez remplir tous les champs.");
    }
  }

  function handleDelete(index) {
    const updatedMessages = submittedMessages.filter((_, i) => i !== index);
    setSubmittedMessages(updatedMessages); // Met à jour la liste des messages
  }

  return (
    <div>
      {/* Bannière */}
      <Banner picture={contactBanner} title="" className="banner" />

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

          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      {/* Affichage des messages envoyés */}
            {submittedMessages.length > 0 && (
        <div className="message-display-container">
          {submittedMessages.map((msg, index) => (
            <MessageDisplay
              key={index}
              name={msg.name}
              message={msg.message}
              onDelete={() => handleDelete(index)}  // Passe la fonction handleDelete
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Vosimpressions;




