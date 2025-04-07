import React from 'react';
import wp from '../../assets/wp.webp'
import './FloatingButton.css';

const FloatingWhatsAppButton = () => {
  return (
    <div className="floating-button">
      <a href="https://api.whatsapp.com/send?phone=5583998150712" target="_blank" rel="noreferrer">
        <img src={wp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
