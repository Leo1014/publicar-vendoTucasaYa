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
            <h2>Antonio Martinez</h2>
            <p>lorem ipsum lorem ipsumlorem lorem ipsumlorem ilorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumpsumlorem ipsumlorem ipsumlorem ipsumipsum</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </header>
  );
}
