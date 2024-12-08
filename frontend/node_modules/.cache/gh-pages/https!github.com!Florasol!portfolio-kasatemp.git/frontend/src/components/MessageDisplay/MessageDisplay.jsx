import React from "react";
import PropTypes from "prop-types";

// import styles
import './messageDisplay.scss';

import trashIcon from '../../assets/trashicon.png';

function MessageDisplay({ name, message, onDelete }) {
  return (
    <div className="message-display">
      {name && <p className="message-display__name"><strong>{name}</strong></p>}
      {message && <p className="message-display__msg">{message}</p>}

      {/* Bouton de suppression */}
      <button
        className="delete-button"
        onClick={onDelete}  // Appel de la fonction de suppression
      >
        <img className="delete-button__icon" src={trashIcon} alt="Delete" />
      </button>
    </div>
  );
}

MessageDisplay.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  onDelete: PropTypes.func, // Ajout de PropTypes pour onDelete
};

export default MessageDisplay;
