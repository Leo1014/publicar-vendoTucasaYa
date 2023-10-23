import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);

  const handleAboutClick = () => {
    setIsModalOpen(true);
  };

  const handleMissionClick = () => {
    setIsMissionModalOpen(true);
  };

  const handleVisionClick = () => {
    setIsVisionModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsMissionModalOpen(false);
    setIsVisionModalOpen(false);
  };

  return (
    <header className={`header ${isModalOpen ? 'modal-open' : ''}`}>
      <img className="logo" src="https://i.ibb.co/yf6bhG6/Logo-Casa-Def.png" />
      <ul className="menu">
        <a href="#" onClick={handleAboutClick}>
          <li>Acerca de Mí</li>
        </a>
        <a href="#" onClick={handleMissionClick}>
          <li>Misión</li>
        </a>
        <a href="#" onClick={handleVisionClick}>
          <li>Visión</li>
        </a>
      </ul>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="image">
              <img src="https://i.ibb.co/mbFJ2MV/Antonio-Martinez.png" alt="Antonio" />
            </div>
            <div className="info">
              <h2>Antonio Martínez</h2>
              <p>Con más de 14 años de experiencia en trámites de vehículos a nivel nacional, ahora dando a conocer los servicios en finca raíz.</p>
              <div className="button">
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMissionModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="info">
              <h2>Misión</h2>
              <p>Somos una empresa privada dedicada a la finca raíz, localizada en el municipio de Soacha, que ofrece a los propietarios de bienes inmuebles los siguientes servicios: Ventas y Avalúos, con personal calificado y calidad humana, ofrecemos un servicio personalizado con fundamento en valores como la honestidad y el respeto por nuestros clientes.
              </p>
              <div className="button">
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isVisionModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="info">
              <h2>Visión</h2>
              <p>Se visiona en el 2023 como una empresa sólida, posicionada dentro de las mejores del mercado inmobiliario del municipio de Soacha, con objeto de que las personas que intervienen en este mercado piensen en nosotros como primera opción en el momento de vender o comprar una vivienda.</p>
              <div className="button">
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
