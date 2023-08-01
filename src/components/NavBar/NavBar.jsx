// import "./NavBar.css"

// export default function NavBar(){
//     return(
//         <header className="header">
//             <img className="logo" src="https://i.ibb.co/yf6bhG6/Logo-Casa-Def.png" />
//             <ul className="menu">
//                 <a href="#"> <li>Acerca de Mi</li> </a>
//                 <a href="#"> <li>Mision</li> </a>
//                 <a href="#"> <li>Vision</li> </a>
//             </ul>
//         </header>
//     )
// }



import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAboutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={`header ${isModalOpen ? 'modal-open' : ''}`}>
      <img className="logo" src="https://i.ibb.co/yf6bhG6/Logo-Casa-Def.png" />
      <ul className="menu">
        <a href="#" onClick={handleAboutClick}>
          <li>Acerca de Mi</li>
        </a>
        <a href="#">
          <li>Mision</li>
        </a>
        <a href="#">
          <li>Vision</li>
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
    </header>
  );
}
